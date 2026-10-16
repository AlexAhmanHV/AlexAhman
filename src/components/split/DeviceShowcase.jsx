import { useEffect, useState } from "react";
import useMediaQuery from "../../hooks/useMediaQuery";

const SWAP_MS = 7000;

// En skärm med staplade skärmdumpar. Den aktiva tonas in och scrollar
// (CSS-animation), den förra ligger kvar längst ner medan den tonas ut.
function Screen({ shots, index }) {
  const active = index % shots.length;
  const previous = (active - 1 + shots.length) % shots.length;

  return (
    <div className="splitScreen">
      {shots.map((shot, i) => {
        let state = "";
        if (i === active) state = " isActive";
        else if (i === previous && shots.length > 1) state = " isLeaving";
        return (
          <img
            key={shot.src}
            className={`splitShot${state}`}
            src={shot.src}
            alt={shot.alt}
            loading={i === 0 ? "eager" : "lazy"}
            decoding="async"
          />
        );
      })}
    </div>
  );
}

// Laptop- och mobilram med riktiga kundsajter. Laptopen döljs under 768 px och
// får sina bilder först när fönstret är minst 768 px brett, så att mobilen
// aldrig hämtar desktopbilderna.
export default function DeviceShowcase({ desktop, mobile, reducedMotion }) {
  const [index, setIndex] = useState(0);
  const isWide = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    if (reducedMotion) return undefined;
    const timer = setInterval(() => setIndex((i) => i + 1), SWAP_MS);
    return () => clearInterval(timer);
  }, [reducedMotion]);

  const shown = reducedMotion ? 0 : index;

  return (
    <div className={`splitDevices${reducedMotion ? " isStill" : ""}`}>
      <div className="splitLaptop">
        <div className="splitLaptopLid">
          <Screen shots={isWide ? desktop : []} index={shown} />
        </div>
        <div className="splitLaptopBase" />
      </div>
      <div className="splitPhone">
        <Screen shots={mobile} index={shown} />
      </div>
    </div>
  );
}
