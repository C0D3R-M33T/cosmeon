import React from 'react';
import { motion } from 'framer-motion';

const timelineData = [
  {
    title: "All started here",
    description:
      "Everything starts with an idea. A spark that we just could not stop thinking about building.",
    image: null,
  },
  {
    title: "First concept",
    description: null,
    image: "/public/assets/glex_img1.jpg",
  },
  {
    title: "When things got serious",
    description:
      "Went from just an idea to actually building the foundation for what Cosmeon is becoming.",
    image: null,
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.2,
      ease: 'easeOut',
    },
  }),
};

const Timeline = () => {
  return (
    <div className="bg-[rgb(10,10,10)] text-white px-6 py-16 md:px-20">
      <div className="max-w-4xl mx-auto relative">
        <h2 className="text-sm text-purple-400 uppercase font-semibold mb-2">Timeline</h2>
        <h1 className="text-4xl font-bold text-white mb-10">Our journey</h1>
        <div className="relative border-l-2 border-gray-700 pl-16 md:pl-20">
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              className="mb-16 relative"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              custom={index}
              variants={itemVariants}
            >
              {/* Dot */}
              <div className="absolute -left-10 top-1 w-6 h-6 bg-[rgb(10,10,10)] border-2 border-gray-500 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-gray-300 rounded-full" />
              </div>

              {/* Content */}
              <div className="text-white">
                <h3 className="text-xl font-semibold mb-2 text-gray-200">{item.title}</h3>
                {item.description && (
                  <p className="text-gray-400 leading-relaxed">{item.description}</p>
                )}
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="rounded-xl mt-4 w-full max-w-md"
                  />
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
