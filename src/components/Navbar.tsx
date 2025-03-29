"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "./ui/button"
import { useState } from "react"
import { cn } from "@/lib/utils"

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Our Works", href: "/works" },
  { name: "Booking", href: "/booking" },
]

export function Navbar() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold">EYESAGE CONSULT</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === link.href ? "text-primary" : "text-muted-foreground"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Menu className="h-5 w-5" />
        </Button>

        <MobileNav open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
      </div>
    </header>
  )
}

function MobileNav({ open, onClose }: { open: boolean; onClose: () => void }) {
  const pathname = usePathname()

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: open ? 0 : "100%" }}
      transition={{ type: "tween" }}
      className="fixed inset-0 z-50 bg-background md:hidden"
    >
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2" onClick={onClose}>
          <span className="text-xl font-bold">EYESAGE CONSULT</span>
        </Link>

        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="h-5 w-5" />
        </Button>
      </div>

      <nav className="container mt-8 flex flex-col gap-6">
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            onClick={onClose}
            className={cn(
              "text-xl font-medium transition-colors hover:text-primary",
              pathname === link.href ? "text-primary" : "text-muted-foreground"
            )}
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </motion.div>
  )
}