"use client"

import { motion } from "framer-motion"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"
import { MapPin, Mail, Phone } from "lucide-react"

export function Contact() {
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
            <h2 className="text-3xl font-bold sm:text-4xl">Contact Us</h2>
            <p className="text-muted-foreground">
              Reach out to our team in Accra for any inquiries or to discuss your project needs.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 h-5 w-5 text-primary" />
                <div>
                  <h3 className="font-semibold">Our Location</h3>
                  <p className="text-muted-foreground">
                    123 Construction Avenue, East Legon<br />
                    Accra, Ghana
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="mt-1 h-5 w-5 text-primary" />
                <div>
                  <h3 className="font-semibold">Email Us</h3>
                  <p className="text-muted-foreground">
                    info@eyesageconsult.com<br />
                    support@eyesageconsult.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="mt-1 h-5 w-5 text-primary" />
                <div>
                  <h3 className="font-semibold">Call Us</h3>
                  <p className="text-muted-foreground">
                    +233 24 123 4567 (Office)<br />
                    +233 50 987 6543 (Mobile)
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <h3 className="mb-4 font-semibold">Working Hours</h3>
              <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
                <div>
                  <p className="font-medium">Monday - Friday</p>
                  <p>8:00 AM - 5:00 PM</p>
                </div>
                <div>
                  <p className="font-medium">Saturday</p>
                  <p>9:00 AM - 1:00 PM</p>
                </div>
                <div>
                  <p className="font-medium">Sunday</p>
                  <p>Closed</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-xl bg-white p-8 shadow-lg"
          >
            <h3 className="mb-6 text-xl font-semibold">Send Us a Message</h3>
            <form className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1 block text-sm font-medium">
                    Full Name
                  </label>
                  <Input id="name" placeholder="John Doe" required />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1 block text-sm font-medium">
                    Email
                  </label>
                  <Input id="email" placeholder="john@example.com" type="email" required />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="mb-1 block text-sm font-medium">
                  Subject
                </label>
                <Input id="subject" placeholder="Inquiry about..." required />
              </div>

              <div>
                <label htmlFor="message" className="mb-1 block text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Your message here..."
                  rows={5}
                  required
                />
              </div>

              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>

        {/* Embedded Google Map */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 overflow-hidden rounded-xl shadow-lg"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.7552056064896!2d-0.16642668476180092!3d5.618795995932307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9b13b0000001%3A0x4e8f1e3e0a1a1a1a!2sEast%20Legon%2C%20Accra%2C%20Ghana!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </div>
    </section>
  )
}