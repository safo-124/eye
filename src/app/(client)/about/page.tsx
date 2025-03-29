import { MissionVision } from "@/components/sections/MissionVision"
import { Values } from "@/components/sections/Values"
import { Team } from "@/components/sections/Team"

export default function AboutPage() {
  return (
    <div className="py-16">
      <MissionVision />
      <Values />
      <Team />
    </div>
  )
}