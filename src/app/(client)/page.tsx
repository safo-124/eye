import { Hero } from "@/components/sections/Hero"
import { Services } from "@/components/sections/Services"

import { Testimonials } from "@/components/sections/Testimonials"
import { Contact } from "@/components/sections/Contact"
import Works from "@/components/sections/works/Works"

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