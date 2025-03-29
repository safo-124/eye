"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const featuredProjects = [
  {
    title: "Legon Heights Residential Complex",
    description: "Luxury apartments in East Legon with modern amenities",
    category: "Residential",
    location: "Accra, Ghana",
    year: "2023",
    image: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    title: "Kumasi Central Business Plaza",
    description: "Mixed-use commercial development in the heart of Kumasi",
    category: "Commercial",
    location: "Kumasi, Ghana",
    year: "2022",
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    title: "Takoradi Industrial Park Survey",
    description: "Comprehensive land survey for new industrial zone",
    category: "Land Survey",
    location: "Takoradi, Ghana",
    year: "2023",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  }
]

export function ProjectShowcase() {
  return (
    <section className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl font-bold sm:text-4xl">Featured Projects</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Selected works that demonstrate our expertise and quality
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group overflow-hidden rounded-xl shadow-lg"
            >
              <div className="relative h-64 overflow-hidden">
                <div 
                  className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="mb-2 flex gap-2">
                      <span className="rounded-full bg-primary/90 px-3 py-1 text-xs font-medium">
                        {project.category}
                      </span>
                      <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-medium backdrop-blur-sm">
                        {project.location}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold">{project.title}</h3>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6">
                <p className="mb-4 text-muted-foreground">{project.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{project.year}</span>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </div>
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
          <Button size="lg">
            View All Projects
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}