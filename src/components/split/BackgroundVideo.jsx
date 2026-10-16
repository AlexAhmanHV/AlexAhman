import { useState, useSyncExternalStore } from "react";

// Stillbilden ligger alltid kvar som bakgrund. Videon läggs till först efter
// window.load och tonas in vid canplay. Saknas filen eller går det sakta
// står stillbilden kvar, utan tom eller svart yta.
function subscribeLoad(callback) {
  window.addEventListener("load", callback, { once: true });
  return () => window.removeEventListener("load", callback);
}
// Läser mediafrågan synkront på klienten (false på servern och under
// hydreringen), så att rätt källa och rörelseinställning gäller redan när
// videon först monteras och ingen onödig begäran görs.
function useMatchMedia(query) {
  return useSyncExternalStore(
    (callback) => {
      const mediaQuery = window.matchMedia(query);
      mediaQuery.addEventListener("change", callback);
      return () => mediaQuery.removeEventListener("change", callback);
    },
    () => window.matchMedia(query).matches,
    () => false,
  );
}

const isLoaded = () => document.readyState === "complete";

export default function BackgroundVideo({ name, reducedMotion }) {
  const isWide = useMatchMedia("(min-width: 768px)");
  const prefersReduced = useMatchMedia("(prefers-reduced-motion: reduce)");
  // False på servern och vid första renderingen, sedan true efter window.load.
  const loaded = useSyncExternalStore(subscribeLoad, isLoaded, () => false);
  // Vilken källvariant som misslyckats. Byter skärmstorlek får nya källor en ny chans.
  const [failedFor, setFailedFor] = useState(null);
  // Vilken källvariant som blivit spelbar. Byter skärmstorlek börjar videon om.
  const [readyFor, setReadyFor] = useState(null);

  const suffix = isWide ? "" : "-720";
  const showVideo = loaded && !reducedMotion && !prefersReduced && failedFor !== suffix;
  const ready = readyFor === suffix;

  function handleError() {
    setFailedFor(suffix);
  }

  return (
    <>
      <img className="splitPoster" src={`/split/poster-${name}.webp`} alt="" />
      {showVideo && (
        <video
          key={suffix}
          className="splitVideo"
          data-ready={ready || undefined}
          muted
          loop
          playsInline
          autoPlay
          preload="none"
          aria-hidden="true"
          onCanPlay={() => setReadyFor(suffix)}
          onError={handleError}
        >
          <source src={`/split/${name}${suffix}.webm`} type="video/webm" />
          <source src={`/split/${name}${suffix}.mp4`} type="video/mp4" onError={handleError} />
        </video>
      )}
      <div className="splitOverlay" aria-hidden="true" />
    </>
  );
}
