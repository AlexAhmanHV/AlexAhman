import { useEffect, useState } from "react";

const CHAR_MS = 35;
const LINE_PAUSE_MS = 1200;
const RESTART_PAUSE_MS = 3000;

// Terminal som skriver ut riktiga rader från projekten, tecken för tecken i en
// loop. Utskriften är dekor för skärmläsare (aria-hidden); label beskriver den.
export default function Terminal({ lines, reducedMotion, label }) {
  // line = raden som skrivs just nu, char = antal utskrivna tecken på den.
  const [pos, setPos] = useState({ line: 0, char: 0 });

  useEffect(() => {
    if (reducedMotion) return undefined;

    const { line, char } = pos;
    let next;
    let delay;
    if (line >= lines.length) {
      next = { line: 0, char: 0 };
      delay = RESTART_PAUSE_MS;
    } else if (char < lines[line].text.length) {
      next = { line, char: char + 1 };
      delay = CHAR_MS;
    } else {
      next = { line: line + 1, char: 0 };
      delay = line === lines.length - 1 ? 0 : LINE_PAUSE_MS;
    }

    const timer = setTimeout(() => setPos(next), delay);
    return () => clearTimeout(timer);
  }, [pos, lines, reducedMotion]);

  const shown = reducedMotion ? lines.length : pos.line;

  return (
    <div className="splitTerminal">
      <div className="splitTerminalBar" aria-hidden="true">
        ~/fx-monitor
      </div>
      <pre className="splitTerminalBody" aria-hidden="true" style={{ "--rows": lines.length }}>
        {lines.map((line, index) => {
          if (index > shown) return null;
          const text = index < shown ? line.text : line.text.slice(0, pos.char);
          const isCurrent = index === Math.min(shown, lines.length - 1);
          return (
            <span key={index} className={`splitTerminalLine tone-${line.tone || "cmd"}`}>
              {text}
              {isCurrent ? <span className="splitTerminalCursor" /> : null}
              {"\n"}
            </span>
          );
        })}
      </pre>
      {label ? <span className="srOnly">{label}</span> : null}
    </div>
  );
}
