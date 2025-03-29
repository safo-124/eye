"use client"

import { motion } from "framer-motion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Kwame Osei",
    role: "Property Developer, Accra",
    content: "Eyesages land survey team saved us months of delays with their efficient boundary demarcation. Their accuracy is unmatched in Ghana.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5
  },
  {
    name: "Ama Serwaa",
    role: "Architect, Kumasi",
    content: "Their architectural designs perfectly blend functionality with Ghanaian aesthetics. They understand our local context better than international firms.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5
  },
  {
    name: "Yaw Boateng",
    role: "Construction Manager, Takoradi",
    content: "Reliable material supply even to remote sites. Their logistics network covers all regions of Ghana without compromising quality.",
    avatar: "https://randomuser.me/api/portraits/men/67.jpg",
    rating: 4
  }
]

export function ServiceTestimonials() {
  return (
    <section className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold sm:text-4xl">Client Experiences</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            What our clients say about working with Eyesage Consult
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-xl border p-6 shadow-sm"
            >
              <div className="mb-4 flex items-center gap-4">
                <Avatar>
                  <AvatarImage src={testimonial.avatar} />
                  <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-muted-foreground">{testimonial.content}</p>
              <div className="mt-4 flex">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}