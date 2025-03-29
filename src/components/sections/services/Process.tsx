"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"

const processSteps = [
  {
    title: "Initial Consultation",
    description: "We discuss your project requirements and objectives",
    icon: <Check className="h-5 w-5 text-primary" />
  },
  {
    title: "Site Assessment",
    description: "Our team conducts thorough on-site evaluation",
    icon: <Check className="h-5 w-5 text-primary" />
  },
  {
    title: "Proposal Development",
    description: "Detailed plan with timelines and cost estimates",
    icon: <Check className="h-5 w-5 text-primary" />
  },
  {
    title: "Project Execution",
    description: "Implementation with quality control at every stage",
    icon: <Check className="h-5 w-5 text-primary" />
  },
  {
    title: "Final Delivery",
    description: "Handover with complete documentation",
    icon: <Check className="h-5 w-5 text-primary" />
  }
]

export function ServiceProcess() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold sm:text-4xl">Our Proven Process</h2>
            <p className="text-muted-foreground">
              We follow a structured approach to ensure quality and transparency in every project
            </p>
            <div className="space-y-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <div className="relative h-full w-full overflow-hidden rounded-xl bg-gray-200">
              <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1581093450021-4a7360e9a9e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center" />
              <div className="absolute inset-0 bg-primary/20"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}