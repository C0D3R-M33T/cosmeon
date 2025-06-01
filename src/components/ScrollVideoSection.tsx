import React, { useEffect, useRef } from 'react';

const ScrollVideoSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !videoRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const scrollHeight = rect.height - window.innerHeight;
      const scrollY = Math.min(Math.max(-rect.top, 0), scrollHeight);
      const progress = scrollY / scrollHeight;

      if (videoRef.current.duration) {
        videoRef.current.currentTime = videoRef.current.duration * progress;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="scroll-video" ref={containerRef} className="relative h-[200vh] bg-black">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          src="/assets/debries.mp4"
          muted
          playsInline
        />
      </div>
    </section>
  );
};

export default ScrollVideoSection;