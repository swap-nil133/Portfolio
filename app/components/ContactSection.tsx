"use client"

import type React from "react"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react"

export default function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const contactInfo = [
    { icon: Mail, label: "Email", value: "swapnilsarker3112@gmail.com", glow: "from-blue-500 to-cyan-500" },
    { icon: Phone, label: "Phone", value: "+880 18xxxxx21", glow: "from-orange-500 to-red-500" },
    { icon: MapPin, label: "Location", value: "Dhaka, Bangladesh", glow: "from-green-500 to-emerald-500" },
  ]

  const socialLinks = [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/swapnil3112/" },
    { name: "GitHub", url: "https://github.com/swap-nil133" },
    { name: "FaceBook", url: "https://facebook.com/swapnil.sarker.133" },
    { name: "YouTube", url: "https://youtube.com/@swapnilsarker133" },
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitted(true)
    setIsSubmitting(false)
    setFormData({ name: "", email: "", message: "" })

    // Reset success state after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section id="contact" ref={sectionRef} className="py-16 sm:py-24 lg:py-32 relative px-4 sm:px-6">
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
                      "0 0 20px rgba(34, 197, 94, 0.3)",
                      "0 0 40px rgba(249, 115, 22, 0.3)",
                      "0 0 20px rgba(34, 197, 94, 0.3)",
                    ],
                  }
                : {}
            }
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
          >
            Let's{" "}
            <span className="bg-gradient-to-r from-green-400 via-orange-400 to-red-500 bg-clip-text text-transparent">
              Talk
            </span>
          </motion.h2>
          <motion.p
            className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Ready to start a conversation? I'd love to hear about your projects and explore how we can work together.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Get in Touch
            </h3>

            <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-12">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  className="group flex items-center gap-3 sm:gap-4"
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <motion.div
                    className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r ${info.glow} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <info.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </motion.div>
                  <div>
                    <p className="text-gray-400 text-xs sm:text-sm mb-1">{info.label}</p>
                    <p className="text-white font-medium text-base sm:text-lg group-hover:text-orange-400 transition-colors duration-300">
                      {info.value}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
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

              <form onSubmit={handleSubmit} className="relative space-y-4 sm:space-y-6">
                <div>
                  <motion.input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none focus:bg-white/10 transition-all duration-300 text-sm sm:text-base"
                    required
                    whileFocus={{ scale: 1.02 }}
                  />
                </div>
                <div>
                  <motion.input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-red-500 focus:outline-none focus:bg-white/10 transition-all duration-300 text-sm sm:text-base"
                    required
                    whileFocus={{ scale: 1.02 }}
                  />
                </div>
                <div>
                  <motion.textarea
                    name="message"
                    placeholder="Your Message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:bg-white/10 transition-all duration-300 resize-none text-sm sm:text-base"
                    required
                    whileFocus={{ scale: 1.02 }}
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="group w-full bg-gradient-to-r from-orange-500 via-red-500 to-blue-500 px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-white font-semibold flex items-center justify-center gap-3 hover:shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 relative overflow-hidden disabled:opacity-70 text-sm sm:text-base"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  data-cursor-hover
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-500 via-red-500 to-orange-500"
                    initial={{ x: "100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.3 }}
                  />

                  <div className="relative z-10 flex items-center gap-3">
                    {isSubmitting ? (
                      <motion.div
                        className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                      />
                    ) : isSubmitted ? (
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                    ) : (
                      <Send className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform duration-300" />
                    )}
                    <span>{isSubmitting ? "Sending..." : isSubmitted ? "Message Sent!" : "Send Message"}</span>
                  </div>
                </motion.button>
              </form>

              {/* Success Animation */}
              {isSubmitted && (
                <motion.div
                  className="absolute inset-0 flex items-center justify-center bg-green-500/20 backdrop-blur-sm rounded-2xl"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                >
                  <motion.div
                    className="text-center"
                    initial={{ y: 20 }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <CheckCircle className="w-12 h-12 sm:w-16 sm:h-16 text-green-400 mx-auto mb-4" />
                    <p className="text-white font-semibold text-sm sm:text-base">Thank you for reaching out!</p>
                    <p className="text-gray-300 text-xs sm:text-sm">I'll get back to you soon.</p>
                  </motion.div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          className="mt-16 sm:mt-24 lg:mt-32 pt-6 sm:pt-8 border-t border-white/10 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.p
            className="text-gray-400 mb-4 text-sm sm:text-base"
            animate={{
              opacity: [0.7, 1, 0.7],
            }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
          >
            © {new Date().getFullYear()} Swapnil. Crafted with passion and dedication to learning.
          </motion.p>

          <div className="flex justify-center space-x-4 sm:space-x-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-orange-400 transition-colors duration-300 text-sm sm:text-base"
                whileHover={{ scale: 1.2, y: -2 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                data-cursor-hover
              >
                {social.name}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
