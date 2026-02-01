"use client";

import { motion } from "framer-motion";

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Orb 1 - Top left */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full opacity-30"
        style={{
          background: "radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, transparent 70%)",
          filter: "blur(60px)",
          top: "-10%",
          left: "-10%",
        }}
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Orb 2 - Bottom right */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full opacity-25"
        style={{
          background: "radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 70%)",
          filter: "blur(80px)",
          bottom: "-20%",
          right: "-10%",
        }}
        animate={{
          x: [0, -40, 0],
          y: [0, -50, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Orb 3 - Center */}
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, rgba(168, 85, 247, 0.5) 0%, transparent 70%)",
          filter: "blur(70px)",
          top: "40%",
          left: "50%",
        }}
        animate={{
          x: [0, 60, 0],
          y: [0, -40, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5,
        }}
      />

      {/* Orb 4 - Top right */}
      <motion.div
        className="absolute w-[300px] h-[300px] rounded-full opacity-25"
        style={{
          background: "radial-gradient(circle, rgba(99, 102, 241, 0.4) 0%, transparent 70%)",
          filter: "blur(50px)",
          top: "10%",
          right: "20%",
        }}
        animate={{
          x: [0, -30, 0],
          y: [0, 40, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 8,
        }}
      />

      {/* Subtle gradient overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at center, transparent 0%, #0a0a0f 70%)",
        }}
      />
    </div>
  );
}
