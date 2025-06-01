import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const texts = [
  "Today’s data centers are overheating, expensive, and vulnerable to disasters.",
  "Earth-based fixes still rely on land, power, and politics — none are future-proof.",
  "There’s no truly sovereign, scalable, and disaster-resilient infrastructure.",
  "So the idea is to take the cloud off the Earth — into space.",
  "We will deploy CubeSats that store, compute, and connect — directly from orbit.",
  "Space gives us clean energy, global access, and digital freedom beyond borders.",
  <span
    key="custom-line"
    className="flex flex-wrap justify-center items-center gap-3 text-center leading-snug"
  >
    So, we welcome you all here at
    <img
      src="/assets/logo_nav.png"
      alt="COSMEON Logo"
      className="h-10 sm:h-12 md:h-14 lg:h-16 inline-block mx-2"
    />
    where space is just one click away
  </span>
];

const ScrollTextReveal: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.defaults({
        toggleActions: "play none none reverse",
      });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: true,
          start: "top top",
          end: `+=${texts.length * 100}%`,
        },
      });

      sectionsRef.current.forEach((el, i) => {
        if (el) {
          timeline.fromTo(
            el,
            { autoAlpha: 0, y: 50 },
            { autoAlpha: 1, y: 0, duration: 0.5 },
            i * 1
          ).to(
            el,
            { autoAlpha: 0, y: -50, duration: 0.5 },
            (i + 0.5) * 1
          );
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative flex items-center justify-center h-screen text-white overflow-hidden"
    >
      {/* Background Stars */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30 pointer-events-none"
        style={{ backgroundImage: "url('/assets/starts_bg.gif')" }}
      />

      {/* Text Content */}
      <div className="relative z-10 w-full px-6 sm:px-12 md:px-20 lg:px-32 max-w-4xl mx-auto">
        {texts.map((text, i) => (
          <div
            key={i}
            ref={(el) => (sectionsRef.current[i] = el)}
            className="absolute inset-0 flex items-center justify-center text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold opacity-0"
          >
            {text}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ScrollTextReveal;
