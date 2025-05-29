import React from "react";

export interface TimelineItemProps {
  title: string;
  content: React.ReactNode;
}

interface TimelineProps {
  data: TimelineItemProps[];
}

const TimelineItem: React.FC<TimelineItemProps> = ({ title, content }) => (
  <div className="relative pl-6 before:absolute before:left-0 before:top-2 before:h-4 before:w-4 before:rounded-full before:bg-blue-600">
    <h3 className="mb-2 text-lg font-semibold text-neutral-900 dark:text-white">
      {title}
    </h3>
    <div>{content}</div>
  </div>
);

const Timeline: React.FC<TimelineProps> = ({ data }) => {
  return (
    <div className="space-y-12 border-l border-neutral-300 pl-4 dark:border-neutral-700">
      {data.map((item, idx) => (
        <TimelineItem key={idx} title={item.title} content={item.content} />
      ))}
    </div>
  );
};

export default Timeline;
