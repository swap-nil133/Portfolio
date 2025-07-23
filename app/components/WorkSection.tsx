"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Play, X } from "lucide-react"
import Image from "next/image"

export default function WorkSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const [showVideoModal, setShowVideoModal] = useState(false)

  const featuredProject = {
    title: "Creative Short Film",
    description:
      "A compelling visual story that showcases my passion for storytelling and creative direction. This project demonstrates my ability to conceptualize, plan, and execute creative ideas.",
    image: "https://i.postimg.cc/g2VyJHp9/Whats-App-Image-2025-07-15-at-1-31-11-AM.jpg?height=600&width=800&text=Short+Film+Preview",
    videoId: "WXlxNA6GC8A", // Replace with actual YouTube video ID
    tags: ["Creative Direction", "Storytelling", "Visual Arts", "Project Management"],
    status: "Featured",
  }

  const placeholderProjects = [
    {
      title: "CGPA Calculator (C++ Console Application)",
      description:
        "A student CGPA calculator using classes to manage subjects and compute weighted averages, demonstrating object-oriented design and basic algorithmic logic.",
      image:
        "https://i.postimg.cc/fLSrYLmX/Screenshot-2025-07-23-235346.png?height=400&width=600&text=C%2B%2B+Project",
      status: "Completed",
      tags: ["C++", "Console App", "OOP", "Algorithm"],
      liveLink: "https://replit.com/@swapnil133/CGPA-Calculator",
    },
    {
      title: "Python Learning Project",
      description: "Exploring Python fundamentals through practical applications",
      image: "/placeholder.svg?height=400&width=600&text=Python+Project",
      status: "Learning",
    },
    {
      title: "Web Development Practice",
      description: "Building responsive layouts with modern CSS techniques",
      image: "/placeholder.svg?height=400&width=600&text=Web+Project",
      status: "Practice",
    },
  ]

  return (
    <section id="work" ref={sectionRef} className="py-32 relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-5xl md:text-7xl font-bold mb-8"
            animate={
              isInView
                ? {
                    textShadow: [
                      "0 0 20px rgba(147, 51, 234, 0.3)",
                      "0 0 40px rgba(249, 115, 22, 0.3)",
                      "0 0 20px rgba(147, 51, 234, 0.3)",
                    ],
                  }
                : {}
            }
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
          >
            My{" "}
            <span className="bg-gradient-to-r from-purple-400 to-orange-500 bg-clip-text text-transparent">
              Work
            </span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            A showcase of my creative projects and learning journey in software
            engineering
          </motion.p>
        </motion.div>

        {/* Featured Project */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              className="relative group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 group-hover:border-white/30 transition-all duration-500">
                <motion.div
                  className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-orange-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"
                  animate={{
                    scale: [1, 1.02, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />

                <div className="relative p-4">
                  <Image
                    src={featuredProject.image || "/placeholder.svg"}
                    alt={featuredProject.title}
                    width={800}
                    height={600}
                    className="w-full h-auto rounded-xl transition-transform duration-500 group-hover:scale-105"
                  />

                  <motion.button
                    onClick={() => setShowVideoModal(true)}
                    className="absolute inset-4 rounded-xl bg-black/50 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ scale: 1.05 }}
                    data-cursor-hover
                  >
                    <motion.div
                      className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 hover:bg-white/30 transition-colors duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Play className="w-8 h-8 text-white ml-1" />
                    </motion.div>
                  </motion.button>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <motion.span
                className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-medium mb-4"
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(147, 51, 234, 0.3)",
                    "0 0 40px rgba(236, 72, 153, 0.3)",
                    "0 0 20px rgba(147, 51, 234, 0.3)",
                  ],
                }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              >
                {featuredProject.status}
              </motion.span>

              <h3 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                {featuredProject.title}
              </h3>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                {featuredProject.description}
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {featuredProject.tags.map((tag, tagIndex) => (
                  <motion.span
                    key={tag}
                    className="px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm font-medium hover:border-white/30 transition-colors duration-300"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + tagIndex * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>

              <div className="flex gap-4">
                <motion.button
                  onClick={() => setShowVideoModal(true)}
                  className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  data-cursor-hover
                >
                  <Play className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                  Watch Video
                </motion.button>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Placeholder Projects */}
        <div className="grid md:grid-cols-3 gap-8">
          {placeholderProjects.map((project, index) => (
            <motion.div
              key={project.title}
              className="group relative"
              initial={{ opacity: 0, y: 100 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 + index * 0.2 }}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-white/30 transition-all duration-500 group-hover:bg-white/10">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  animate={{
                    background: [
                      "linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1), rgba(236, 72, 153, 0.1))",
                      "linear-gradient(45deg, rgba(236, 72, 153, 0.1), rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))",
                    ],
                  }}
                  transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
                />

                <div className="relative">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-white">{project.title}</h3>
                      <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-xs font-medium">
                        {project.status}
                      </span>
                    </div>
                    <p className="text-gray-400 leading-relaxed">{project.description}</p>

                    {/* Live Link Button */}
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-3 px-4 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {showVideoModal && (
        <motion.div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setShowVideoModal(false)}
        >
          <motion.div
            className="relative bg-gray-900 rounded-2xl overflow-hidden max-w-4xl w-full"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowVideoModal(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center hover:bg-black/70 transition-colors duration-300"
              data-cursor-hover
            >
              <X className="w-5 h-5 text-white" />
            </button>
            <div className="aspect-video">
              <iframe
                src={`https://www.youtube.com/embed/${featuredProject.videoId}?autoplay=1`}
                title={featuredProject.title}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}
