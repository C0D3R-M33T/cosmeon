// src/components/Timeline.tsx

import React from "react";
import { Timeline } from "./ui/timeline";

export default function TimelineDemo() {
  const data = [
    {
      title: "Till June 2024",
      content: (
        <ul className="list-disc ml-6 space-y-3 text-base md:text-lg leading-relaxed text-neutral-200">
          <li>We were busy living our parallel lives — some coding, some designing, some just surviving Monday mornings.</li>
          <li>Running in the rat race, chasing deadlines, caffeine, and capitalism — unaware the planet was quietly overheating.</li>
        </ul>
      ),
    },
    {
      title: "2024, June",
      content: (
        <div className="space-y-6">
          <ul className="list-disc ml-6 space-y-3 text-base md:text-lg leading-relaxed text-neutral-200">
            <li>
              Came across an article from Columbia Climate School on AI’s growing carbon footprint
            </li>
            <li>
              Watched CBS News interview with Jeff Bezos about moving heavy/polluting industry off Earth
            </li>
            <li>
              Sparked idea: moving data centers to space
            </li>
          </ul>
    
          {/* Hyperlinked images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a href="https://news.climate.columbia.edu/2023/06/09/ais-growing-carbon-footprint/" target="_blank" rel="noopener noreferrer">
              <img
                src="/assets/columbia_article.png"
                alt="Columbia Climate School"
                className="w-full h-40 object-cover rounded-lg shadow-md hover:scale-[1.02] transition-transform duration-200"
              />
            </a>
            <a href="https://www.cbsnews.com/news/jeff-bezos-space-heavy-industry-polluting-industry/#:~:text=it%20will%20happen.-,We%20can%20move%20all%20heavy%20industry%20and%20all%20polluting%20industry,their%20first%20flight%20in%201903." target="_blank" rel="noopener noreferrer">
              <img
                src="/assets/jeff.png"
                alt="CBS Interview with Jeff Bezos"
                className="w-full h-40 object-cover rounded-lg shadow-md hover:scale-[1.02] transition-transform duration-200"
              />
            </a>
          </div>
        </div>
      ),
    },
    
    
    {
      title: "2024, July",
      content: (
        <ul className="list-disc ml-6 space-y-3 text-base md:text-lg leading-relaxed text-neutral-200">
          <li>Gathered like-minded friends</li>
          <li>Formed vision to combat global warming and pollution using space-based infrastructure</li>
        </ul>
      ),
    },
    {
      title: "2024, October",
      content: (
        <div className="space-y-6">
          <ul className="list-disc ml-6 space-y-3 text-base md:text-lg leading-relaxed text-neutral-200">
            <li>
              Named the company: COSMEON (Cosmic Operations for Secure Modular and Efficient Orbital Networks)
            </li>
          </ul>
    
          {/* Image under October */}
          <img
            src="/assets/logo_nav.png"
            alt="COSMEON Logo"
            className="w-full max-w-md mx-auto rounded-lg shadow-md object-contain"
          />
        </div>
      ),
    },
    
    {
      title: "2024, November",
      content: (
        <div className="space-y-6">
          <ul className="list-disc ml-6 space-y-3 text-base md:text-lg leading-relaxed text-neutral-200">
            <li>
              Presented COSMEON at Manipal University Jaipur (event by AIC MUJ, E-Cell MUJ, IIC-Ministry of Education)
            </li>
            <li>Secured 1st position and nominated for pre-seed incubation</li>
          </ul>
    
          {/* Single constrained image */}
          <div className="w-full flex justify-center">
            <img
              src="/assets/iq_stage.png"
              alt="COSMEON Presentation at Manipal University"
              className="w-full max-w-[600px] h-[350px] object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      ),
    },    
    
    
    {
      title: "2024, December",
      content: (
        <ul className="list-disc ml-6 space-y-3 text-base md:text-lg leading-relaxed text-neutral-200">
          <li>
            Met a senior officer at INSPACe India, received insights and support for execution feasibility
          </li>
        </ul>
      ),
    },
    {
      title: "2025, February",
      content: (
        <div className="space-y-6">
          <ul className="list-disc ml-6 space-y-3 text-base md:text-lg leading-relaxed text-neutral-200">
            <li>Received incubation and acceptance letter from AIC MUJ, Manipal University Jaipur</li>
          </ul>
          <div className="w-full flex justify-center">
            <img
              src="/assets/upcoming_warehouse.png"
              alt="Incubation Letter"
              className="w-full max-w-[600px] h-[350px] object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2025, March",
      content: (
        <div className="space-y-6">
          <ul className="list-disc ml-6 space-y-3 text-base md:text-lg leading-relaxed text-neutral-200">
            <li>Submitted thesis report of COSMEON to Atan Incubation Center, Jaipur Division, Manipal University</li>
          </ul>
          <div className="w-full flex justify-center">
            <img
              src="/assets/upcoming_warehouse.png"
              alt="Thesis Submission"
              className="w-full max-w-[600px] h-[350px] object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2025, April",
      content: (
        <div className="space-y-6">
          <ul className="list-disc ml-6 space-y-3 text-base md:text-lg leading-relaxed text-neutral-200">
            <li>
              Nominated to attend GLEX 2025 (Global Exploration Conference) organized by ISRO, hosted in Delhi
            </li>
            <li>
            Awarded Startup of the Year by the President of Manipal University Jaipur at the annual honorary event organized by the Board of Directors (from left Dr Kuldeep Singh Sanghwan, Dean FoSTA).
            </li>
          </ul>
          <div className="w-full flex justify-center">
            <img
              src="/assets/presi.png"
              alt="GLEX Nomination"
              className="w-full max-w-[600px] h-[350px] object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2025, May",
      content: (
        <div className="space-y-6">
          <ul className="list-disc ml-6 space-y-3 text-base md:text-lg leading-relaxed text-neutral-200">
            <li>
              Began strategic dialogue with industry leaders for mission-aligned co-development and collaboration
            </li>
            <li>
              Attended GLEX 2025
            </li>
          </ul>
          <div className="flex justify-center">
            <img
              src="/assets/glex_img1.jpg" // Replace with your actual image path
              alt="Industry Dialogue"
              className="rounded-xl shadow-lg w-full max-w-xl"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2025, June",
      content: (
        <div className="space-y-6">
          <ul className="list-disc ml-6 space-y-3 text-base md:text-lg leading-relaxed text-neutral-200">
            <li>
              Invited to 7th Industry Connect by INSPACe & ISRO at INSPACe HQ, Ahmedabad to discuss new space tech policies
            </li>
            <li>This is just the beginning of the journey</li>
          </ul>
        </div>
      ),
    },
    
  ];

  return <Timeline data={data} />;
}
