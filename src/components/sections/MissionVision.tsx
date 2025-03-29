"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"

export function MissionVision() {
  return (
    <section className="py-12">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold sm:text-4xl">Our Mission & Vision</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Guiding principles that define who we are and what we strive for
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="h-full border-primary">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To provide transparent, evidence-based consulting services, building trust with clients in a complex, ever-changing world.
                </p>
                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 h-2 w-2 rounded-full bg-primary" />
                    <p className="text-muted-foreground">
                      Transparent Consulting Services
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="mt-1 h-2 w-2 rounded-full bg-primary" />
                    <p className="text-muted-foreground">
                      Evidence-Based Decision Making
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="mt-1 h-2 w-2 rounded-full bg-primary" />
                    <p className="text-muted-foreground">
                      Building Trust with Clients
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="mt-1 h-2 w-2 rounded-full bg-primary" />
                    <p className="text-muted-foreground">
                      Navigating Complexity and Change
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="h-full border-primary">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We strive to make a lasting impact, shaping the built environment with precision, creativity, and dedication.
                </p>
                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 h-2 w-2 rounded-full bg-primary" />
                    <p className="text-muted-foreground">
                      Lasting Impact on Communities
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="mt-1 h-2 w-2 rounded-full bg-primary" />
                    <p className="text-muted-foreground">
                      Precision in Design and Execution
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="mt-1 h-2 w-2 rounded-full bg-primary" />
                    <p className="text-muted-foreground">
                      Creative Solutions to Complex Problems
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="mt-1 h-2 w-2 rounded-full bg-primary" />
                    <p className="text-muted-foreground">
                      Dedication to Exceptional Results
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}