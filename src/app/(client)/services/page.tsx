import { ServicesHero } from "@/components/sections/services/Hero"
import { ServiceCategories } from "@/components/sections/services/Categories"
import { ServiceProcess } from "@/components/sections/services/Process"
import { ServiceTestimonials } from "@/components/sections/services/Testimonials"
import { ServiceCTA } from "@/components/sections/services/CTA"

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServiceCategories />
      <ServiceProcess />
      <ServiceTestimonials />
      <ServiceCTA />
    </>
  )
}