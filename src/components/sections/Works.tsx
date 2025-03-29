"use client"

import { motion } from "framer-motion"
import { Button } from "../ui/button"

const projects = [
  {
    title: "Residential Complex",
    description: "A modern residential development with sustainable features.",
    image: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    title: "Commercial Plaza",
    description: "Mixed-use commercial space in the city center.",
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    title: "Land Survey Project",
    description: "Comprehensive land survey for large development.",
    image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  }
]

export function Works() {
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
          <h2 className="text-3xl font-bold sm:text-4xl">Our Works</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            See some of our completed projects and satisfied clients.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group overflow-hidden rounded-lg shadow-lg transition-all hover:shadow-xl"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="bg-white p-6">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="mt-2 text-muted-foreground">{project.description}</p>
                <Button variant="link" className="mt-4 px-0">
                  View Project
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <Button size="lg">View All Projects</Button>
        </motion.div>
      </div>
    </section>
  )
}