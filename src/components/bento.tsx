import React, { useEffect, useRef } from "react";
import { cn } from "../lib/utils";
import createGlobe from "cobe";
import { motion } from "framer-motion";
import { IconBrandYoutubeFilled } from "@tabler/icons-react";

export function FeaturesSectionDemo() {
  const features = [
    {
      title: "Why move cloud infrastructure to orbit?",
      description:
        "Earth is crowded, geopolitically unstable and power-hungry. Space offers sovereignty, clean energy, and global coverage without borders.",
      link: "Why Space Makes Sense →",
      className:
        "col-span-1 lg:col-span-3 border-b lg:border-r dark:border-neutral-800",
      image: "/earth-grid-1.png",
    },
    {
      title: "How does orbital infrastructure work?",
      description:
        "A secure mesh of CubeSats in LEO communicates with ground stations and user devices.",
      link: "Explore Architecture →",
      className:
        "col-span-1 lg:col-span-3 border-b dark:border-neutral-800",
      image: "/earth-grid-2.png",
    },
    {
      title: "Is space really affordable and usable?",
      description:
        "✓ Launch costs dropped by 60%\n✓ Space cooling is free in vacuum\n✓ CubeSats are now computecable\n\nWhat was once fantasy is now engineering.",
      link: "How Feasibility Became Reality →",
      className:
        "col-span-1 lg:col-span-3 border-b lg:border-r dark:border-neutral-800",
      image: "/earth-grid-3.png",
    },
    {
      title: "Test, compute, simulate—above Earth",
      description:
        "Run AI models, store encrypted data, or simulate operations above the clouds.\n\nCOSMEON enables sovereign orbital operations for governments, research, and defense.",
      link: "Use Cases in Orbit →",
      className: "col-span-1 lg:col-span-3 border-b dark:border-neutral-800",
      image: "/earth-grid-4.png",
    },
  ];

  return (
    <div className="relative z-20 py-10 lg:py-40 max-w-7xl mx-auto">
      <div className="px-8">
        <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
          Packed with thousands of features
        </h4>

        <p className="text-sm lg:text-base max-w-2xl my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
          From image generation to video generation — Everything AI has APIs for literally everything. It can even create this website copy for you.
        </p>
      </div>

      <div className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-6 mt-12 xl:border rounded-md dark:border-neutral-800">
          {features.map((feature, idx) => (
            <FeatureCard key={idx} className={feature.className}>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>
                {feature.description.split("\n").map((line, index) => (
                  <p key={index} className="mb-1">
                    {line}
                  </p>
                ))}
              </FeatureDescription>
              <div className="mt-4 text-blue-500 font-medium text-sm">{feature.link}</div>
              {feature.image && (
                <img
                  src={feature.image}
                  alt="illustration"
                  className="w-full h-auto mt-4 rounded-md"
                />
              )}
            </FeatureCard>
          ))}
        </div>
      </div>
    </div>
  );
}

const FeatureCard = ({ children, className }: { children?: React.ReactNode; className?: string }) => {
  return <div className={cn("p-6 sm:p-8 relative overflow-hidden", className)}>{children}</div>;
};

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => (
  <p className="max-w-5xl mx-auto text-left tracking-tight text-black dark:text-white text-xl md:text-2xl md:leading-snug">
    {children}
  </p>
);

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => (
  <div className="text-sm md:text-base max-w-4xl text-left mx-auto text-neutral-500 font-normal dark:text-neutral-300">
    {children}
  </div>
);

export default FeaturesSectionDemo;
