"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin } from "lucide-react"

export function ServiceCTA() {
  return (
    <section className="bg-primary text-white">
      <div className="container">
        <div className="grid gap-12 py-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold sm:text-4xl">Ready to Start Your Project?</h2>
            <p className="text-primary-foreground/80">
              Get in touch with our team to discuss your construction needs in Ghana
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Book Consultation
              </Button>
              <Button size="lg" variant="outline" className="text-white">
                View Projects
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="flex items-start gap-4">
              <Phone className="mt-1 h-5 w-5 text-white" />
              <div>
                <h3 className="font-semibold">Call Us</h3>
                <p className="text-primary-foreground/80">
                  +233 24 123 4567 (Office)<br />
                  +233 50 987 6543 (Mobile)
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="mt-1 h-5 w-5 text-white" />
              <div>
                <h3 className="font-semibold">Email Us</h3>
                <p className="text-primary-foreground/80">
                  services@eyesageconsult.com<br />
                  support@eyesageconsult.com
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MapPin className="mt-1 h-5 w-5 text-white" />
              <div>
                <h3 className="font-semibold">Visit Us</h3>
                <p className="text-primary-foreground/80">
                  123 Construction Avenue<br />
                  East Legon, Accra, Ghana
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}