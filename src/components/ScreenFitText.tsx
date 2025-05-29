// ScreenFitText.tsx
import React, { useEffect, useRef } from "react";

export const ScreenFitText = ({ text }: { text: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    resizeText();
    window.addEventListener("resize", resizeText);
    return () => window.removeEventListener("resize", resizeText);
  }, []);

  const resizeText = () => {
    const container = containerRef.current;
    const textEl = textRef.current;

    if (!container || !textEl) return;

    const containerWidth = container.offsetWidth;
    let min = 1;
    let max = 250;

    while (min <= max) {
      const mid = Math.floor((min + max) / 2);
      textEl.style.fontSize = `${mid}px`;
      if (textEl.offsetWidth <= containerWidth) {
        min = mid + 1;
      } else {
        max = mid - 1;
      }
    }

    textEl.style.fontSize = `${max}px`;
  };

  return (
    <div ref={containerRef} className="w-full h-auto overflow-hidden text-center">
      <span
        ref={textRef}
        className="whitespace-nowrap font-bold uppercase text-slate-500 block"
      >
        {text}
      </span>
    </div>
  );
};
