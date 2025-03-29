import Link from "next/link";
import { Icons } from "@/components/icons";
import { siteConfig } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="border-t bg-gray-50">
      <div className="container py-10">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2">
              <Icons.logo className="h-6 w-6" />
              <span className="font-bold">{siteConfig.name}</span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              {siteConfig.description}
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services/survey"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Land Survey
                </Link>
              </li>
              <li>
                <Link
                  href="/services/development"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Property Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services/design"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Architectural Design
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold">Connect</h3>
            <div className="flex space-x-4">
              <Link
                href={siteConfig.links.twitter}
                target="_blank"
                rel="noreferrer"
              >
                <Icons.twitter className="h-5 w-5 text-muted-foreground hover:text-foreground" />
              </Link>
              <Link
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                <Icons.linkedin className="h-5 w-5 text-muted-foreground hover:text-foreground" />
              </Link>
              <Link
                href={siteConfig.links.github}
                target="_blank"
                rel="noreferrer"
              >
                <Icons.github className="h-5 w-5 text-muted-foreground hover:text-foreground" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t pt-6">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}