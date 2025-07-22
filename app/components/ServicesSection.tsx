"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Code2, Globe, Film } from "lucide-react"

export default function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const services = [
    {
      icon: Code2,
      title: "Programming",
      description: "Mastering C++, Python, and Object-Oriented Programming principles",
      skills: ["C++ Fundamentals", "Python Development", "OOP Concepts", "Data Structures"],
      glow: "from-blue-500 to-cyan-500",
    },
    {
      icon: Globe,
      title: "Web Fundamentals",
      description: "Building responsive and modern web interfaces with clean code",
      skills: ["HTML5 & CSS3", "Tailwind CSS", "Responsive Design", "Modern Layouts"],
      glow: "from-orange-500 to-red-500",
    },
    {
      icon: Film,
      title: "Visual Projects",
      description: "Creating compelling visual stories and multimedia experiences",
      skills: ["Short Films", "Visual Storytelling", "Creative Direction", "Digital Media"],
      glow: "from-purple-500 to-pink-500",
    },
  ]

  return (
    <section id="services" ref={sectionRef} className="py-16 sm:py-24 lg:py-32 relative px-4 sm:px-6">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-12 sm:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-6 sm:mb-8"
            animate={
              isInView
                ? {
                    textShadow: [
                      "0 0 20px rgba(59, 130, 246, 0.3)",
                      "0 0 40px rgba(249, 115, 22, 0.3)",
                      "0 0 20px rgba(59, 130, 246, 0.3)",
                    ],
                  }
                : {}
            }
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
          >
            What{" "}
            <span className="bg-gradient-to-r from-blue-400 via-orange-400 to-red-500 bg-clip-text text-transparent">
              I Do
            </span>
          </motion.h2>
          <motion.p
            className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            My current focus areas as I build my foundation in software engineering
          </motion.p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              {/* Glassmorphism card */}
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 h-full hover:border-white/30 transition-all duration-500 group-hover:bg-white/10">
                {/* Animated neon glow */}
                <motion.div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${service.glow} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />

                <motion.div
                  className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${service.glow} rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <service.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </motion.div>

                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 group-hover:text-white transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {service.description}
                </p>

                <div className="space-y-2">
                  {service.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      className="flex items-center text-xs sm:text-sm text-gray-500 group-hover:text-gray-400 transition-colors duration-300"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: index * 0.2 + skillIndex * 0.1 }}
                    >
                      <motion.div
                        className={`w-2 h-2 bg-gradient-to-r ${service.glow} rounded-full mr-3 flex-shrink-0`}
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [0.7, 1, 0.7],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                          delay: skillIndex * 0.3,
                        }}
                      />
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
