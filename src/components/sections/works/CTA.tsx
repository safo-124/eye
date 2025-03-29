"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function WorksCTA() {
  return (
    <section className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-xl bg-primary p-12 text-center text-white"
        >
          <h2 className="text-3xl font-bold sm:text-4xl">Start Your Project With Us</h2>
          <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/80">
            Lets discuss how we can bring your construction vision to life with our expertise
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              Get a Free Quote
            </Button>
            <Button size="lg" variant="outline" className="text-white">
              Contact Our Team
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}