import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-xl font-bold">EYESAGE CONSULT</h3>
            <p className="mt-4 text-gray-400">
              We serve you with speed, accuracy and integrity in construction and property services.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="mt-4 space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white">Home</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white">About</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white">Services</Link></li>
              <li><Link href="/works" className="text-gray-400 hover:text-white">Our Works</Link></li>
              <li><Link href="/booking" className="text-gray-400 hover:text-white">Booking</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold">Services</h4>
            <ul className="mt-4 space-y-2">
              <li><Link href="/services" className="text-gray-400 hover:text-white">Land Survey</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white">Property Development</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white">Architectural Design</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white">Construction Materials</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <address className="mt-4 not-italic text-gray-400">
              <p>123 Construction Avenue</p>
              <p>City, State 10001</p>
              <p>Phone: (123) 456-7890</p>
              <p>Email: info@eyesageconsult.com</p>
            </address>
            <div className="mt-4 flex gap-4">
              <Link href="#"><Facebook className="h-5 w-5" /></Link>
              <Link href="#"><Twitter className="h-5 w-5" /></Link>
              <Link href="#"><Instagram className="h-5 w-5" /></Link>
              <Link href="#"><Linkedin className="h-5 w-5" /></Link>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Eyesage Consult. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}