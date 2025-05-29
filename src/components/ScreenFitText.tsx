import React, { useEffect, useRef } from "react";

export const ScreenFitText = ({ text }: { text: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const resizeObserver = new ResizeObserver(() => resizeText());
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }
    window.addEventListener("resize", resizeText);

    return () => {
      if (containerRef.current) {
        resizeObserver.unobserve(containerRef.current);
      }
      window.removeEventListener("resize", resizeText);
    };
  }, []);

  const resizeText = () => {
    const container = containerRef.current;
    const textEl = textRef.current;

    if (!container || !textEl) return;

    const containerWidth = container.offsetWidth;
    let min = 10;
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
    <div
      ref={containerRef}
      className="w-full px-4 sm:px-6 lg:px-8 text-center"
    >
      <span
        ref={textRef}
        className="whitespace-nowrap font-bold uppercase text-slate-500 block leading-none"
        style={{ lineHeight: 1 }}
      >
        {text}
      </span>
    </div>
  );
};