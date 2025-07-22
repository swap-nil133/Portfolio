"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { ChevronDown } from "lucide-react"

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [currentTime, setCurrentTime] = useState(new Date())

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about")
    aboutSection?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact")
    contactSection?.scrollIntoView({ behavior: "smooth" })
  }

  // Calculate angles for clock hands
  const hours = currentTime.getHours() % 12
  const minutes = currentTime.getMinutes()
  const seconds = currentTime.getSeconds()

  const hourAngle = hours * 30 + minutes * 0.5 - 90
  const minuteAngle = minutes * 6 - 90
  const secondAngle = seconds * 6 - 90

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRailiOPvq9wQ0W57gamrdrx9ZASMfvO58oAR6lg7KZ9-0p1WX56gCsRJc&s?height=1080&width=1920&text=Futuristic+Tech+Background+with+Neon+Lights+and+Digital+Grid')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950/70 via-gray-950/50 to-gray-950" />
      </div>

      <div className="relative z-10 container mx-auto flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-6 sm:gap-8 lg:gap-16">
        {/* Futuristic Clock - Mobile First Responsive */}
        <motion.div
          className="relative w-48 h-48 xs:w-56 xs:h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 flex-shrink-0 order-2 lg:order-1"
          initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          style={{ y, opacity }}
        >
          {/* Outer metallic frame */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-800 via-gray-900 to-black border-2 sm:border-3 lg:border-4 border-gray-700 shadow-2xl">
            {/* Inner glow ring */}
            <div className="absolute inset-1 sm:inset-2 rounded-full bg-gradient-to-br from-gray-900 to-black border border-gray-600">
              {/* Holographic display background */}
              <div className="absolute inset-2 sm:inset-3 lg:inset-4 rounded-full overflow-hidden bg-gradient-to-br from-purple-900/50 via-blue-900/50 to-pink-900/50">
                {/* Animated neon arcs */}
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: `conic-gradient(from 0deg, 
                      transparent 0deg, 
                      rgba(59, 130, 246, 0.8) 60deg,
                      rgba(147, 51, 234, 0.8) 120deg,
                      rgba(236, 72, 153, 0.8) 180deg,
                      rgba(249, 115, 22, 0.8) 240deg,
                      rgba(239, 68, 68, 0.8) 300deg,
                      transparent 360deg
                    )`,
                  }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                />

                {/* Inner dark overlay for cityscape */}
                <div className="absolute inset-3 sm:inset-6 lg:inset-8 rounded-full bg-gradient-to-b from-transparent via-black/60 to-black/80">
                  {/* Cityscape silhouette - Responsive */}
                  <div className="absolute bottom-0 left-0 right-0 h-8 sm:h-16 lg:h-24 bg-gradient-to-t from-black via-gray-900 to-transparent">
                    {/* Building silhouettes - Responsive sizes */}
                    <div className="absolute bottom-0 left-1/4 w-2 sm:w-6 lg:w-8 h-4 sm:h-12 lg:h-16 bg-black/80 rounded-t-sm" />
                    <div className="absolute bottom-0 left-1/3 w-1.5 sm:w-4 lg:w-6 h-5 sm:h-16 lg:h-20 bg-black/80 rounded-t-sm" />
                    <div className="absolute bottom-0 left-1/2 w-2.5 sm:w-7 lg:w-10 h-3 sm:h-8 lg:h-12 bg-black/80 rounded-t-sm" />
                    <div className="absolute bottom-0 right-1/3 w-2 sm:w-5 lg:w-7 h-4.5 sm:h-14 lg:h-18 bg-black/80 rounded-t-sm" />
                    <div className="absolute bottom-0 right-1/4 w-2.5 sm:w-6 lg:w-9 h-3.5 sm:h-10 lg:h-14 bg-black/80 rounded-t-sm" />
                  </div>

                  {/* Clock hands - Fully Responsive */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    {/* Hour hand */}
                    <motion.div
                      className="absolute w-0.5 sm:w-0.5 lg:w-1 h-6 sm:h-12 lg:h-16 bg-gradient-to-t from-orange-500 to-orange-300 rounded-full origin-bottom"
                      style={{
                        transform: `rotate(${hourAngle}deg)`,
                        transformOrigin: "50% 100%",
                        top: "-24px",
                        left: "-1px",
                      }}
                      animate={{
                        boxShadow: [
                          "0 0 10px rgba(249, 115, 22, 0.5)",
                          "0 0 20px rgba(249, 115, 22, 0.8)",
                          "0 0 10px rgba(249, 115, 22, 0.5)",
                        ],
                      }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    />

                    {/* Minute hand */}
                    <motion.div
                      className="absolute w-0.5 h-8 sm:h-16 lg:h-20 bg-gradient-to-t from-blue-500 to-blue-300 rounded-full origin-bottom"
                      style={{
                        transform: `rotate(${minuteAngle}deg)`,
                        transformOrigin: "50% 100%",
                        top: "-32px",
                        left: "-1px",
                      }}
                      animate={{
                        boxShadow: [
                          "0 0 8px rgba(59, 130, 246, 0.5)",
                          "0 0 16px rgba(59, 130, 246, 0.8)",
                          "0 0 8px rgba(59, 130, 246, 0.5)",
                        ],
                      }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
                    />

                    {/* Second hand */}
                    <motion.div
                      className="absolute w-0.5 h-10 sm:h-20 lg:h-24 bg-gradient-to-t from-red-500 to-red-300 rounded-full origin-bottom"
                      style={{
                        transform: `rotate(${secondAngle}deg)`,
                        transformOrigin: "50% 100%",
                        top: "-40px",
                        left: "-1px",
                      }}
                      animate={{
                        boxShadow: [
                          "0 0 6px rgba(239, 68, 68, 0.5)",
                          "0 0 12px rgba(239, 68, 68, 0.8)",
                          "0 0 6px rgba(239, 68, 68, 0.5)",
                        ],
                      }}
                      transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
                    />

                    {/* Center hub */}
                    <motion.div
                      className="absolute w-2 h-2 sm:w-3 sm:h-3 lg:w-4 lg:h-4 bg-gradient-to-r from-orange-500 via-purple-500 to-blue-500 rounded-full transform -translate-x-1/2 -translate-y-1/2"
                      animate={{
                        boxShadow: [
                          "0 0 15px rgba(147, 51, 234, 0.6)",
                          "0 0 25px rgba(249, 115, 22, 0.8)",
                          "0 0 15px rgba(147, 51, 234, 0.6)",
                        ],
                      }}
                      transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                    />
                  </div>

                  {/* Hour markers - Responsive */}
                  {[...Array(12)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-0.5 h-2 sm:h-4 lg:h-6 bg-gradient-to-b from-cyan-400 to-purple-500 rounded-full"
                      style={{
                        top: "2px",
                        left: "50%",
                        transformOrigin: "50% 48px",
                        transform: `translateX(-50%) rotate(${i * 30}deg)`,
                      }}
                      animate={{
                        opacity: [0.4, 1, 0.4],
                        scale: [0.8, 1.2, 0.8],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: i * 0.2,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Outer glow effect */}
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-orange-500/20 blur-lg sm:blur-xl lg:blur-2xl"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
          />
        </motion.div>

        {/* Content and Hire Me Button - Smaller Fonts */}
        <motion.div
          className="flex-1 text-center lg:text-left order-1 lg:order-2 lg:ml-8 xl:ml-16 max-w-2xl lg:max-w-none"
          style={{ y, opacity }}
        >
          <motion.h1
            className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 lg:mb-8 leading-tight"
            initial={{ opacity: 0, x: 0, y: 50 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <span className="block text-white">Hi, I'm</span>
            <span className="block bg-gradient-to-r from-orange-400 via-red-500 to-blue-500 bg-clip-text text-transparent">
              Swapnil Sarker
            </span>
          </motion.h1>

          <motion.p
            className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl text-gray-300 mb-2 sm:mb-3 lg:mb-4 max-w-xl mx-auto lg:mx-0 leading-relaxed px-2 sm:px-4 lg:px-0"
            initial={{ opacity: 0, x: 0, y: 50 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1, delay: 1.3 }}
          >
            Aspiring Junior Software Engineer
          </motion.p>

          <motion.p
            className="text-xs xs:text-sm sm:text-base lg:text-lg text-gray-400 mb-6 sm:mb-8 lg:mb-12 max-w-lg mx-auto lg:mx-0 px-2 sm:px-4 lg:px-0 leading-relaxed"
            initial={{ opacity: 0, x: 0, y: 50 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            Learning C++, Python, and following the curriculum to become a skilled software engineer.
          </motion.p>

          <motion.div
            className="flex justify-center lg:justify-start"
            initial={{ opacity: 0, x: 0, y: 50 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1, delay: 1.7 }}
          >
            {/* Futuristic Hire Me button - Responsive */}
            <motion.button
              onClick={scrollToContact}
              className="group relative px-4 xs:px-5 sm:px-6 lg:px-8 py-2.5 xs:py-3 sm:py-3 lg:py-4 bg-gradient-to-r from-orange-500 via-red-500 to-purple-600 rounded-full text-white font-bold text-sm xs:text-base sm:text-base lg:text-lg overflow-hidden border border-orange-400/30"
              whileHover={{
                scale: 1.05,
                boxShadow: [
                  "0 0 30px rgba(249, 115, 22, 0.6)",
                  "0 0 50px rgba(239, 68, 68, 0.8)",
                  "0 0 30px rgba(249, 115, 22, 0.6)",
                ],
              }}
              whileTap={{ scale: 0.95 }}
              data-cursor-hover
            >
              <span className="relative z-10 flex items-center gap-2">
                HIRE ME
                <motion.div
                  className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [1, 0.5, 1],
                  }}
                  transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                />
              </span>

              {/* Animated glow effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-orange-400 via-red-400 to-purple-500 rounded-full blur-md"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              />

              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full"
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              />

              {/* Pulse ring */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-orange-400"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [1, 0, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToAbout}
        className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 group"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        data-cursor-hover
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="flex flex-col items-center text-white/60 group-hover:text-white transition-colors duration-300"
        >
          <span className="text-xs sm:text-sm mb-1 sm:mb-2">Scroll to explore</span>
          <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
        </motion.div>
      </motion.button>
    </section>
  )
}
