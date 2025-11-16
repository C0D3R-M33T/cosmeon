import React from 'react';
import Timeline from '../components/Timeline';

const TimelinePage = () => {
  return (
    <main className="min-h-screen bg-mono-950 text-mono-100 pt-32 pb-16">
      <section className="mx-auto max-w-4xl px-4 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-neutral-400">
          Journey of COSMEON
        </p>
        <h1 className="mt-4 text-4xl font-semibold md:text-5xl">
          A dedicated view of our milestones
        </h1>
        <p className="mt-4 text-base text-neutral-300 md:text-lg">
          Explore the events that shaped our mission, from early insights to orbital ambitions.
        </p>
      </section>
      <div className="mt-12">
        <Timeline />
      </div>
    </main>
  );
};

export default TimelinePage;
