"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const services = [
  {
    title: "Land Survey Services",
    description: "Precision land documentation, boundary demarcation, and topographic surveys for secure property ownership.",
    icon: "📍",
    features: [
      "Boundary Planting & Pillaring",
      "Land Contouring",
      "Title Documentation",
      "Site Leveling"
    ]
  },
  {
    title: "Property Development",
    description: "End-to-end real estate solutions from land acquisition to completed projects across Ghana.",
    icon: "🏗️",
    features: [
      "Land Acquisition",
      "Residential Developments",
      "Commercial Properties",
      "Project Management"
    ]
  },
  {
    title: "Architectural Design",
    description: "Innovative and functional designs tailored to Ghana's climate and cultural context.",
    icon: "🏛️",
    features: [
      "2D/3D Architectural Plans",
      "Structural Engineering",
      "Interior Design",
      "Permit Acquisition"
    ]
  },
  {
    title: "Construction Materials",
    description: "Quality building materials supply with reliable distribution across all regions.",
    icon: "🧱",
    features: [
      "Cement & Aggregates",
      "Roofing Materials",
      "Plumbing & Electrical",
      "Equipment Rental"
    ]
  }
]

export function ServiceCategories() {
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
          <h2 className="text-3xl font-bold sm:text-4xl">Our Service Categories</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Specialized solutions for every stage of your construction journey
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full transition-all hover:shadow-lg hover:border-primary">
                <CardHeader>
                  <div className="mb-4 text-4xl">{service.icon}</div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-muted-foreground">{service.description}</p>
                  <ul className="mb-6 space-y-2 text-sm">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary"></span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="link" className="px-0">
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}