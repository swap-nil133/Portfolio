"use client"

import { motion, useScroll } from "framer-motion"
import { useEffect, useState } from "react"
import { ChevronUp } from "lucide-react"

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const { scrollYProgress } = useScroll()

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      // Show button when user has scrolled more than 50% of the page
      setIsVisible(latest > 0.5)
    })

    return () => unsubscribe()
  }, [scrollYProgress])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <motion.button
      onClick={scrollToTop}
      className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-50 group"
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        scale: isVisible ? 1 : 0,
      }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.95 }}
      data-cursor-hover
    >
      {/* Main button - responsive size */}
      <div className="relative w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-orange-500 via-red-500 to-purple-600 rounded-full flex items-center justify-center border border-orange-400/30 overflow-hidden">
        <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6 text-white relative z-10 group-hover:-translate-y-1 transition-transform duration-300" />

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
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />

        {/* Pulse ring */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-orange-400"
          animate={{
            scale: [1, 1.8, 1],
            opacity: [1, 0, 1],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Tooltip - hidden on mobile */}
      <motion.div
        className="hidden sm:block absolute bottom-full right-0 mb-2 px-3 py-1 bg-gray-900/90 backdrop-blur-sm border border-gray-700 rounded-lg text-white text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={{ y: 10 }}
        whileHover={{ y: 0 }}
      >
        Back to top
        <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900/90" />
      </motion.div>
    </motion.button>
  )
}
