import { useEffect, useState } from "react";

// Följer en mediafråga. Är false på servern och vid första renderingen, så
// att förrenderad HTML och första klientrenderingen alltid stämmer överens.
export default function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    const update = () => setMatches(mediaQuery.matches);

    update();
    mediaQuery.addEventListener("change", update);
    return () => mediaQuery.removeEventListener("change", update);
  }, [query]);

  return matches;
}
