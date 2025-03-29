"use client"

import { motion } from "framer-motion"
import { Button } from "../ui/button"

export function Hero() {
  return (
    <section className="relative h-[calc(100vh-64px)] w-full overflow-hidden">
      <div className="absolute inset-0 z-0 bg-black/50">
        {/* Replace with your actual image */}
        <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center" />
      </div>

      <div className="container relative z-10 flex h-full flex-col items-start justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl space-y-6 text-white"
        >
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl sm:leading-tight md:text-6xl md:leading-tight">
            We Serve You with Speed, Accuracy and Integrity
          </h1>
          <p className="text-lg text-white/80">
            Empowering informed decisions through transparency and expertise in constructing quality projects with timely delivery.
          </p>
          <div className="flex gap-4">
            <Button size="lg">Our Services</Button>
            <Button size="lg" variant="outline" className="text-black">
              Contact Us
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}