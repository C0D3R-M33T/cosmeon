import { useEffect, useState } from "react";
import { PointerHighlight } from "./ui/pointer-highlight";
import { ChevronDown } from "lucide-react";

export function PointerHighlightDemo() {
  const [scrollLocked, setScrollLocked] = useState(true);

  useEffect(() => {
    // Lock scroll when component mounts
    if (scrollLocked) {
      document.body.style.overflow = "hidden";
    }

    // Release scroll after 5 seconds
    const timer = setTimeout(() => {
      setScrollLocked(false);
      document.body.style.overflow = "";
    }, 5000); // adjust duration here

    return () => {
      // Clean up on unmount
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, [scrollLocked]);

  return (
    <section className="relative h-screen w-full flex items-center justify-center text-white overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-70 z-0"
        src="/assets/earthbg.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Highlighted Text */}
      <div className="relative z-10 mx-auto px-4 text-center max-w-2xl text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
        Why take the cloud to space?{" "}
        <PointerHighlight
          rectangleClassName="bg-blue-900/60 border-blue-500"
          pointerClassName="text-blue-400"
        >
          <span className="relative z-10">Because Earth isn't future-proof.</span>
        </PointerHighlight>

        {/* Scroll Down Indicator */}
        {!scrollLocked && (
          <div className="mt-10 flex flex-col items-center gap-1 animate-bounce text-white/80 text-sm">
            <span>Explore Why</span>
            <ChevronDown className="w-5 h-5" />
          </div>
        )}
      </div>
    </section>
  );
}