"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const CollegeLogosStrip = () => {
  const collegeLogos = [
    { name: "AKG", src: "/images/Logos/College/Logo_AKG.png" },
    { name: "Amity", src: "/images/Logos/College/Logo_Amity.png" },
    { name: "Christ", src: "/images/Logos/College/Logo_Christ.jpg" },
    { name: "IGTDUW", src: "/images/Logos/College/Logo_IGTDUW.png" },
    { name: "IMS", src: "/images/Logos/College/Logo_IMS.jpeg" },
    { name: "ITS", src: "/images/Logos/College/Logo_ITS.png" },
    { name: "Jaipuria", src: "/images/Logos/College/Logo_Jaipuria.png" },
  ];

  // Duplicate the logos array for seamless looping
  const duplicatedLogos = [...collegeLogos, ...collegeLogos];

  return (
    <div className="w-full py-12 overflow-hidden">
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex items-center gap-12"
          animate={{
            x: [0, -1200],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear",
            },
          }}
          style={{ width: "200%" }}
        >
          {duplicatedLogos.map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className="flex-shrink-0 bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300 group"
              style={{ minWidth: "200px", height: "120px" }}
            >
              <div className="w-full h-full flex items-center justify-center">
                <Image
                  src={logo.src}
                  alt={`${logo.name} logo`}
                  width={150}
                  height={80}
                  className="object-contain transition-all duration-300"
                  style={{ maxWidth: "100%", maxHeight: "100%" }}
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default CollegeLogosStrip;
