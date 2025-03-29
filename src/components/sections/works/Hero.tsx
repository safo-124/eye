"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function WorksHero() {
  return (
    <section className="relative h-[60vh] w-full overflow-hidden bg-gray-900">
      <div className="absolute inset-0 z-0 bg-black/60">
        <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center" />
      </div>

      <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl space-y-6 text-white"
        >
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl sm:leading-tight md:text-6xl md:leading-tight">
            Our Portfolio of Excellence
          </h1>
          <p className="text-xl text-white/80">
            Discover our completed projects that showcase quality construction across Ghana
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="text-white">
              Get a Quote
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}