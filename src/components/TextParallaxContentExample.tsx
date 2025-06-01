import React, { ReactNode, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

const TextParallaxContentExample = () => {
  return (
    <div
      className="bg-cover bg-center"
      style={{
        backgroundImage: "url('/stars.gif')",
      }}
    >
      <TextParallaxContent
        imgUrl="/assets/paralax_1.png"
        subheading="Earth is running out of space, power, and resilience."
        heading="Why Space Matters"
      >
        <SectionContent
          title="The Limitations of Ground-Based Infrastructure"
          text1="Data centers on Earth consume massive energy, generate heat, and depend on increasingly scarce and expensive land. They’re also vulnerable — from rising global temperatures to floods, power failures, and geopolitical risk. We needed a better foundation — one that isn't tied to geography or politics."
          buttonLabel="Learn More"
        />
      </TextParallaxContent>

      <TextParallaxContent
        imgUrl="/assets/paralax_2.png"
        subheading="We don't just launch satellites — we build orbital infrastructure."
        heading="Space as a Platform"
      >
        <SectionContent
          title="Turning Orbit into Cloud"
          text1="TCOSMEON uses CubeSats in Low Earth Orbit to create a resilient mesh network that stores data, runs AI computations, and securely relays information between Earth and orbit — independent of any one nation’s grid or land."
          text2="This is infrastructure that floats, scales, and operates globally by design."
          buttonLabel="Explore Architecture"
        />
      </TextParallaxContent>

      <TextParallaxContent
        imgUrl="/assets/paralax_3.png"
        subheading="Solar-powered, vacuum-cooled, borderless compute"
        heading="Clean Power, Constant Uptime"
      >
        <SectionContent
          title="Powered by the Physics of Space"
          text1="Our satellites harness continuous solar energy and naturally dissipate heat in the vacuum of space — no fans, no cooling towers, no emissions. It's always-on infrastructure, running above Earth 24/7 without burning a single drop of fossil fuel."
          buttonLabel="See how it works"
        />
      </TextParallaxContent>

      <TextParallaxContent
        imgUrl="/assets/paralax_4.png"
        subheading="Running intelligent systems, right from orbit."
        heading="AI, Above the Clouds"
      >
        <SectionContent
          title="Onboard AI Inference & Simulation"
          text1="Each COSMEON satellite is designed to run edge AI models in space, allowing latency-sensitive applications like Earth observation, disaster prediction, and encrypted analysis — without waiting for data to transmit to Earth and back."
          buttonLabel="Use Cases in Orbit"
        />
      </TextParallaxContent>

      <TextParallaxContent
        imgUrl="/assets/paralax_5.png"
        subheading="Infrastructure that no one can turn off."
        heading="A Sovereign Digital Layer"
      >
        <SectionContent
          title="Freedom from Borders & Control"
          text1="Unlike traditional systems, COSMEON operates above national boundaries, immune to terrestrial outages or censorship."
          text2="It's built to serve scientific missions, defense systems, and digital independence — for governments, institutions, and innovators."
          buttonLabel="Know More"
        />
      </TextParallaxContent>
    </div>
  );
};

const TextParallaxContent = ({
  imgUrl,
  subheading,
  heading,
  children,
}: {
  imgUrl: string;
  subheading: string;
  heading: string;
  children: ReactNode;
}) => {
  return (
    <div className="px-4 md:px-12">
      <div className="relative h-[150vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
};

const StickyImage = ({ imgUrl }: { imgUrl: string }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        top: 12,
        scale,
        opacity,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl w-full h-[60vh] md:h-[calc(100vh-24px)]"
    />
  );
};

const OverlayCopy = ({
  subheading,
  heading,
}: {
  subheading: string;
  heading: string;
}) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{ y, opacity }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white px-4 text-center"
    >
      <p className="mb-2 text-lg sm:text-xl md:mb-4 md:text-3xl">{subheading}</p>
      <p className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-bold">
        {heading}
      </p>
    </motion.div>
  );
};

const SectionContent = ({
  title,
  text1,
  text2,
  buttonLabel,
}: {
  title: string;
  text1: string;
  text2?: string;
  buttonLabel: string;
}) => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12 text-white">
    <h2 className="col-span-1 text-2xl sm:text-3xl font-bold md:col-span-4">
      {title}
    </h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-lg sm:text-xl md:text-2xl">{text1}</p>
      {text2 && <p className="mb-8 text-lg sm:text-xl md:text-2xl">{text2}</p>}
      <button className="w-full md:w-auto rounded bg-white px-6 md:px-9 py-3 md:py-4 text-base md:text-xl text-black transition-colors hover:bg-neutral-300">
        {buttonLabel} <FiArrowUpRight className="inline ml-2" />
      </button>
    </div>
  </div>
);

export default TextParallaxContentExample;