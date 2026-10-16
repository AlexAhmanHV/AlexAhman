import { useState, useSyncExternalStore } from "react";
import useMediaQuery from "../../hooks/useMediaQuery";

// Stillbilden ligger alltid kvar som bakgrund. Videon läggs till först efter
// window.load och tonas in vid canplay. Saknas filen eller går det sakta
// står stillbilden kvar, utan tom eller svart yta.
function subscribeLoad(callback) {
  window.addEventListener("load", callback, { once: true });
  return () => window.removeEventListener("load", callback);
}
const isLoaded = () => document.readyState === "complete";

export default function BackgroundVideo({ name, reducedMotion }) {
  const isWide = useMediaQuery("(min-width: 768px)");
  // False på servern och vid första renderingen, sedan true efter window.load.
  const loaded = useSyncExternalStore(subscribeLoad, isLoaded, () => false);
  const [failed, setFailed] = useState(false);
  // Vilken källvariant som blivit spelbar. Byter skärmstorlek börjar videon om.
  const [readyFor, setReadyFor] = useState(null);

  const suffix = isWide ? "" : "-720";
  const showVideo = loaded && !reducedMotion && !failed;
  const ready = readyFor === suffix;

  function handleError() {
    setFailed(true);
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
