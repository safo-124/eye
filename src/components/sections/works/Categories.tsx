"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

const projectCategories = [
  {
    name: "Residential",
    count: "12+ Projects",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    name: "Commercial",
    count: "8+ Projects",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    name: "Land Survey",
    count: "25+ Projects",
    image: "https://images.unsplash.com/photo-1605152276897-4f618f831968?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    name: "Industrial",
    count: "5+ Projects",
    image: "https://images.unsplash.com/photo-1605106702734-205df224ecce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  }
]

export function ProjectCategories() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl font-bold sm:text-4xl">Project Categories</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Explore our work by project type and sector
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {projectCategories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative h-64 overflow-hidden rounded-xl"
            >
              <div 
                className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${category.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold">{category.name}</h3>
                  <p className="text-sm text-white/80">{category.count}</p>
                  <Button
                    variant="link"
                    className="mt-2 px-0 text-white hover:text-white/80"
                  >
                    View Projects
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}