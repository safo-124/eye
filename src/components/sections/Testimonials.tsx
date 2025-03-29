"use client"

import { motion } from "framer-motion"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Card, CardContent, CardHeader } from "../ui/card"

const testimonials = [
  {
    name: "Kwame Asante",
    role: "Property Developer",
    content: "Eyesage Consult delivered our land survey with impressive accuracy and speed. Their professionalism made our project timeline achievable.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5
  },
  {
    name: "Ama Serwaa",
    role: "Architect",
    content: "Working with Eyesage on our commercial project in East Legon was seamless. Their construction materials supply was reliable and high-quality.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5
  },
  {
    name: "Yaw Boateng",
    role: "Business Owner",
    content: "Their property valuation service helped us make an informed decision on our Osu property acquisition. Highly recommend their expertise.",
    avatar: "https://randomuser.me/api/portraits/men/67.jpg",
    rating: 4
  }
]

export function Testimonials() {
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
          <h2 className="text-3xl font-bold sm:text-4xl">Client Testimonials</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Hear what our clients say about our services in Accra and beyond.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardHeader className="flex flex-row items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar} />
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <div className="mt-1 flex">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`h-4 w-4 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <blockquote className="text-muted-foreground">
                    {testimonial.content}
                  </blockquote>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}