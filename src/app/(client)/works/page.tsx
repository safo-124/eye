import { WorksHero } from "@/components/sections/works/Hero"
import { ProjectShowcase } from "@/components/sections/works/Showcase"
import { ProjectCategories } from "@/components/sections/works/Categories"
import { WorksCTA } from "@/components/sections/works/CTA"

export default function WorksPage() {
  return (
    <>
      <WorksHero />
      <ProjectShowcase />
      <ProjectCategories />
      <WorksCTA />
    </>
  )
}