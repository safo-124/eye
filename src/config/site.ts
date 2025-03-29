import { MainNavItem } from "@/types";

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Eyesage Consult",
  description:
    "We serve you with speed, accuracy and integrity in construction and property development.",
  url: "https://eyesageconsult.com",
  ogImage: "https://eyesageconsult.com/og.jpg",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Services",
      href: "/services",
    },
    {
      title: "Projects",
      href: "/projects",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ] satisfies MainNavItem[],
  links: {
    twitter: "https://twitter.com/eyesageconsult",
    github: "https://github.com/eyesageconsult",
    linkedin: "https://linkedin.com/company/eyesageconsult",
  },
};