"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Code, BookOpen, Target, Heart } from "lucide-react"

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const timeline = [
    {
      icon: BookOpen,
      title: "My Journey",
      description: "Following a comprehensive curriculum to master programming fundamentals",
      status: "In Progress",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Code,
      title: "C++ Mastery",
      description: "Learning object-oriented programming and data structures",
      status: "Learning",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Target,
      title: "Python Development",
      description: "Exploring Python for versatile programming solutions",
      status: "Exploring",
      color: "from-green-500 to-emerald-500",
    },
  ]

  return (
    <section id="about" ref={sectionRef} className="py-16 sm:py-24 lg:py-32 relative px-4 sm:px-6">
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
                      "0 0 20px rgba(249, 115, 22, 0.3)",
                      "0 0 40px rgba(239, 68, 68, 0.3)",
                      "0 0 20px rgba(249, 115, 22, 0.3)",
                    ],
                  }
                : {}
            }
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
          >
            Who <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">Am I?</span>
          </motion.h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 hover:border-white/20 transition-all duration-500">
              <motion.div
                className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500/10 via-red-500/10 to-blue-500/10 opacity-0 hover:opacity-100 transition-opacity duration-500"
                animate={{
                  background: [
                    "linear-gradient(45deg, rgba(249, 115, 22, 0.1), rgba(239, 68, 68, 0.1), rgba(59, 130, 246, 0.1))",
                    "linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(249, 115, 22, 0.1), rgba(239, 68, 68, 0.1))",
                  ],
                }}
                transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
              />

              <div className="relative">
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-4 sm:mb-6">
                  I'm <span className="text-orange-400 font-semibold">Swapnil Sarker</span>, an aspiring Junior Software
                  Engineer currently learning C++, Python, and completing rigorous curriculum.
                </p>
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-4 sm:mb-6">
                  I love solving problems, telling stories through visuals, and building creative digital experiences.
                  My passion lies in combining <span className="text-blue-400 font-semibold">technical excellence</span>{" "}
                  with <span className="text-red-400 font-semibold">creative storytelling</span>.
                </p>
                <div className="flex items-center gap-2 text-orange-400">
                  <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="font-medium text-sm sm:text-base">Creativity • Storytelling • Design Passion</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            className="space-y-4 sm:space-y-6"
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {timeline.map((item, index) => (
              <motion.div
                key={item.title}
                className="group relative"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 sm:p-6 hover:border-white/20 transition-all duration-500 group-hover:bg-white/10">
                  <motion.div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500`}
                    whileHover={{ scale: 1.02 }}
                  />

                  <div className="relative flex items-start gap-3 sm:gap-4">
                    <motion.div
                      className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </motion.div>

                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-2">
                        <h3 className="text-lg sm:text-xl font-bold text-white">{item.title}</h3>
                        <span
                          className={`px-2 sm:px-3 py-1 bg-gradient-to-r ${item.color} rounded-full text-xs font-medium self-start`}
                        >
                          {item.status}
                        </span>
                      </div>
                      <p className="text-sm sm:text-base text-gray-400 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
