import React from "react";
import Timeline, { TimelineItemProps } from "./Timeline";

const TimelineDemo: React.FC = () => {
  const data: TimelineItemProps[] = [
    {
      title: "2024",
      content: (
        <div>
          <p className="mb-8 text-sm text-neutral-800 dark:text-neutral-200">
            Built and launched new UI tools from scratch.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((n) => (
              <img
                key={n}
                src={`https://via.placeholder.com/500x300?text=Project+${n}`}
                alt={`Project ${n}`}
                className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
              />
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "Early 2023",
      content: (
        <div>
          <p className="mb-4 text-sm text-neutral-800 dark:text-neutral-200">
            Created modern UI components for various sections.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {[5, 6, 7, 8].map((n) => (
              <img
                key={n}
                src={`https://via.placeholder.com/500x300?text=Design+${n}`}
                alt={`Design ${n}`}
                className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
              />
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "Changelog",
      content: (
        <div>
          <p className="mb-4 text-sm text-neutral-800 dark:text-neutral-200">
            Deployed multiple new components.
          </p>
          <ul className="mb-6 list-disc pl-6 text-sm text-neutral-700 dark:text-neutral-300">
            <li>✅ Card grid system</li>
            <li>✅ Responsive templates</li>
            <li>✅ File upload component</li>
            <li>✅ Music player</li>
            <li>✅ User club registration</li>
          </ul>
          <div className="grid grid-cols-2 gap-4">
            {[9, 10, 11, 12].map((n) => (
              <img
                key={n}
                src={`https://via.placeholder.com/500x300?text=Release+${n}`}
                alt={`Release ${n}`}
                className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
              />
            ))}
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="relative w-full overflow-clip p-4">
      <Timeline data={data} />
    </div>
  );
};

export default TimelineDemo;
