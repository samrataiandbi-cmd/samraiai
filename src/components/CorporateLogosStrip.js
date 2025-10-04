"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const CorporateLogosStrip = () => {
  const corporateLogos = [
    { name: "Abbott", src: "/images/Logos/Corporate/Logo_Abbott.png" },
    { name: "Cipla", src: "/images/Logos/Corporate/Logo_Cipla.png" },
    { name: "Gabriel", src: "/images/Logos/Corporate/Logo_Gabriel.png" },
    { name: "HCL", src: "/images/Logos/Corporate/Logo_HCL.png" },
    { name: "Macleods", src: "/images/Logos/Corporate/Logo_Macleods.png" },
    {
      name: "Saint Gobain",
      src: "/images/Logos/Corporate/Logo_SaintGobain.png",
    },
    { name: "TCS", src: "/images/Logos/Corporate/Logo_TCS.png" },
    {
      name: "Technicolor",
      src: "/images/Logos/Corporate/Logo_Technicolor.png",
    },
  ];

  // Duplicate the logos array for seamless looping
  const duplicatedLogos = [...corporateLogos, ...corporateLogos];

  return (
    <div className="w-full py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-2">
          Trusted by Leading Corporations and Educational Institutions
        </h2>
        <p className="text-amber-200 text-center text-lg">
          Corporations and Universities I have collaborated with
        </p>
      </div>

      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex items-center gap-12"
          animate={{
            x: [-1200, 0],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
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

export default CorporateLogosStrip;
