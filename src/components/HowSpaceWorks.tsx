import { motion } from "framer-motion";
import Image from "/assets/logo_nav.png";

export default function HowSpaceWorks() {
  return (
    <section className="relative bg-gradient-to-b from-[#0d1d4a] to-[#0b0b1d] text-white py-20 px-4 md:px-16 overflow-hidden">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
        How Space Works
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-center gap-12 relative z-10">
        {/* Cube revolving around Earth */}
        <motion.div
          className="relative w-40 h-40"
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute inset-0 rounded-full border border-blue-500" />
          <motion.div
            className="absolute top-0 left-1/2 w-8 h-8 bg-blue-400 rounded-md shadow-lg"
            style={{ translateX: "-50%" }}
          />
        </motion.div>

        {/* Arrow to ground station */}
        <div className="hidden md:block text-4xl">➡️</div>

        {/* Ground station */}
        <div className="flex flex-col items-center">
          <Image src="/ground-station.png" alt="Ground Station" width={80} height={80} />
          <p className="mt-2 font-medium">Ground station</p>
        </div>

        {/* Arrow to user */}
        <div className="hidden md:block text-4xl">➡️</div>

        {/* User device */}
        <div className="flex flex-col items-center">
          <Image src="/user-icon.png" alt="User Device" width={80} height={80} />
          <p className="mt-2 font-medium">Data returned to user</p>
        </div>
      </div>

      {/* Text and buttons */}
      <div className="text-center mt-16 max-w-3xl mx-auto">
        <p className="text-lg md:text-xl text-gray-300 mb-6">
          Explore our constellation. See how we're launching COSMEON's orbital cloud for Earth and beyond.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md">
            View Use Cases
          </button>
          <button className="border border-cyan-400 hover:bg-cyan-600 text-cyan-300 hover:text-white px-6 py-3 rounded-lg font-semibold shadow-md">
            Explore the Archi
          </button>
        </div>
      </div>

      {/* Background stars */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-20 animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
    </section>
  );
}
