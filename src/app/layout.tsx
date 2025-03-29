import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Foot"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Eyesage Consult - Construction and Property Solutions",
  description: "We serve you with speed, accuracy and integrity in land survey, property development, and construction services.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}