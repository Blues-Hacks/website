export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Blues Hacks",
  description:
    "Beautifully designed components built with Radix UI and Tailwind CSS.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Updates",
      href: "/updates",
    },
    {
      title: "Schedule",
      href: "/schedule",
    },
    {
      title: "Livestream",
      href: "/livestream",
    },
  ],
  links: {
    pdf: "file:///C:/Users/Owner/Documents/Coding/Projects/blues-hacks/blues-hacks/assets/Blues%20Hacks%20'24%20Participant%20Package.pdf",
    instagram: "https://www.instagram.com/blues_hacks/",
    github: "https://github.com/Blues-Hacks",
    docs: "https://ui.shadcn.com",
  },
}
