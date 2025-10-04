"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function ParallaxHero() {
  const { scrollY } = useScroll();
  const yImg = useTransform(scrollY, [0, 600], [0, 110]);
  const yBg = useTransform(scrollY, [0, 600], [0, -70]);
  const fade = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-rose-900 via-red-900 to-red-950">
      {/* Modern geometric background */}
      <motion.div
        style={{ y: yBg, opacity: fade }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        {/* Primary gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-rose-900 via-red-900 to-red-950" />

        {/* Geometric shapes */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-rose-500/10 to-pink-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-red-500/10 to-rose-500/10 rounded-full blur-3xl" />

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </motion.div>

      {/* Content */}
      <div className="relative w-full pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            {/* Image - Show first on mobile */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative order-1 lg:order-2 flex items-end justify-end self-end lg:justify-end"
            >
              <div className="relative lg:ml-8 lg:mr-8">
                <Image
                  src="/images/cutout.png"
                  alt="Samrat Mukherjee"
                  width={1200}
                  height={1440}
                  priority
                  className="w-full max-w-none h-auto drop-shadow-2xl scale-125 lg:scale-150"
                />

                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full blur-xl opacity-20" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full blur-xl opacity-20" />
              </div>
            </motion.div>

            {/* Text Content - Show second on mobile */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative z-10 order-2 lg:order-1"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-6"
              >
                🎯 Data Analytics Expert & Educator
              </motion.div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                <span className="text-white">Transform Your career with </span>
                <span className="bg-gradient-to-r from-orange-400 via-yellow-400 to-amber-400 bg-clip-text text-transparent">
                  Samrat
                </span>
              </h1>

              <p className="text-xl text-white/80 leading-relaxed mb-8 max-w-lg">
                Master Data Analytics, Machine Learning & AI through hands-on
                projects. Join 4000+ professionals who transformed their careers
                with my proven methodology.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link href="#start" className="inline-block">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 h-15 inline-flex items-center justify-center bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Start Learning Today
                  </motion.button>
                </Link>

                <Link href="#testimonials" className="inline-block">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 h-15 inline-flex items-center justify-center border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
                  >
                    View Success Stories
                  </motion.button>
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-1">
                {[
                  { value: "4000+", label: "Students Trained" },
                  { value: "100+", label: "corporate consultations" },
                  { value: "30+", label: "Partner Institutes" },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-3xl font-bold text-orange-400 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-[12px] text-white/60 uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center text-white/60">
            <span className="text-sm mb-2">Scroll to explore</span>
            <motion.svg
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </motion.svg>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
