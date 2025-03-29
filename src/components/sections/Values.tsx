"use client"

import { motion } from "framer-motion"
import { Badge } from "../ui/badge"

const values = [
  {
    name: "Client-Centricity",
    description: "We prioritize our clients' needs and deliver tailored solutions that exceed expectations."
  },
  {
    name: "Integrity",
    description: "We uphold the highest ethical standards in all our dealings and maintain complete transparency."
  },
  {
    name: "Professionalism",
    description: "Our team demonstrates expertise, reliability, and respect in every interaction."
  },
  {
    name: "Innovation",
    description: "We embrace creative thinking and cutting-edge solutions to solve complex challenges."
  },
  {
    name: "Accountability",
    description: "We take ownership of our commitments and deliver on our promises without compromise."
  }
]

export function Values() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold sm:text-4xl">Our Core Values</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            The foundation of everything we do at Eyesage Consult
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {values.map((value, index) => (
            <motion.div
              key={value.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-lg bg-white p-6 shadow-sm"
            >
              <Badge variant="outline" className="mb-4 bg-primary/10 text-primary">
                {value.name}
              </Badge>
              <p className="text-muted-foreground">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}