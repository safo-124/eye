import { type Icon as LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Check,
  ChevronDown,
  ChevronRight,
  Circle,
  ClipboardList,
  Construction,
  DraftingCompass,
  Factory,
  Github,
  LandPlot,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Quote,
  Ruler,
  Timer,
  Twitter,
  Users,
  X,
} from "lucide-react";

export type Icon = LucideIcon;

export const Icons = {
  arrowRight: ArrowRight,
  check: Check,
  chevronDown: ChevronDown,
  chevronRight: ChevronRight,
  circle: Circle,
  close: X,
  quote: Quote,
  mail: Mail,
  phone: Phone,
  location: MapPin,
  twitter: Twitter,
  github: Github,
  linkedin: Linkedin,
  
  // Brand logo
  logo: Construction,
  
  // Loading spinner
  spinner: (props: any) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  ),
  
  // Feature icons
  transparency: ClipboardList,
  expertise: Users,
  timely: Timer,
  quality: Check,
  
  // Service icons
  survey: Ruler,
  development: LandPlot,
  design: DraftingCompass,
  materials: Factory,
  
  // Social icons
  social: {
    twitter: Twitter,
    github: Github,
    linkedin: Linkedin,
  },
  
  // Contact icons
  contact: {
    mail: Mail,
    phone: Phone,
    location: MapPin,
  },
};