"use client"

import { motion } from "framer-motion"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Button } from "../ui/button"
import { Linkedin } from "lucide-react"

const teamMembers = [
  {
    name: "Kwame Asante",
    role: "Founder & CEO",
    bio: "20+ years experience in construction and property development across West Africa.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    linkedin: "#"
  },
  {
    name: "Ama Serwaa",
    role: "Head of Architecture",
    bio: "Registered architect with expertise in sustainable design and urban planning.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    linkedin: "#"
  },
  {
    name: "Yaw Boateng",
    role: "Lead Surveyor",
    bio: "Specializes in geodetic surveys and large-scale land documentation projects.",
    avatar: "https://randomuser.me/api/portraits/men/67.jpg",
    linkedin: "#"
  },
  {
    name: "Esi Mensah",
    role: "Construction Manager",
    bio: "Oversees project execution with focus on quality control and safety standards.",
    avatar: "https://randomuser.me/api/portraits/women/63.jpg",
    linkedin: "#"
  }
]

export function Team() {
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
          <h2 className="text-3xl font-bold sm:text-4xl">Meet Our Team</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            The experienced professionals behind Eyesage Consults success
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group overflow-hidden rounded-lg"
            >
              <div className="relative h-64 overflow-hidden">
                <Avatar className="absolute inset-0 h-full w-full rounded-none">
                  <AvatarImage src={member.avatar} />
                  <AvatarFallback>{member.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
                </Avatar>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 transition-opacity group-hover:opacity-100">
                  <div className="absolute bottom-4 left-4 right-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full bg-white text-black hover:bg-white/90"
                      asChild
                    >
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                        <Linkedin className="mr-2 h-4 w-4" />
                        Connect
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6">
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-sm text-primary">{member.role}</p>
                <p className="mt-2 text-sm text-muted-foreground">{member.bio}</p>
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
          <Button variant="outline" size="lg">
            View All Team Members
          </Button>
        </motion.div>
      </div>
    </section>
  )
}