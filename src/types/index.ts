export interface MainNavItem {
    title: string;
    href: string;
    disabled?: boolean;
  }
  
  export interface SiteConfig {
    name: string;
    description: string;
    url: string;
    ogImage: string;
    mainNav: MainNavItem[];
    links: {
      twitter: string;
      github: string;
      linkedin: string;
    };
  }