import { Hero } from "@/components/sections/Hero"
import { Services } from "@/components/sections/Services"
import { Works } from "@/components/sections/Works"
import { Testimonials } from "@/components/sections/Testimonials"
import { Contact } from "@/components/sections/Contact"

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Works />
      <Testimonials />
      <Contact />
    </>
  )
}