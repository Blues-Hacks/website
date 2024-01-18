"use client"
import Link from "next/link"
import { siteConfig } from "@/config/site"
import { Button, buttonVariants } from "@/components/ui/button"
import { Metadata } from "next/types"
import { Calendar } from "@/components/ui/calendar"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { usePathname } from "next/navigation"

// export const metadata: Metadata = {
//   title: {
//     default: siteConfig.name,
//     template: `%s - ${siteConfig.name}`,
//   },
//   description: siteConfig.description,
//   themeColor: [
//     { media: "(prefers-color-scheme: light)", color: "white" },
//     { media: "(prefers-color-scheme: dark)", color: "black" },
//   ],
//   icons: {
//     icon: "/favicon.ico",
//     shortcut: "/favicon-16x16.png",
//     apple: "/apple-touch-icon.png",
//   },
// }

export default function IndexPage() {
  return (
    <section className="container grid grid-cols-10 items-center w-[100vw] h-[80vh] md:align-middle">
      <div className="col-span-10 md:col-span-6 flex flex-col items-start gap-2 p-4">
      <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
        Innovative Solutions Unleashed at <br className="hidden sm:inline" />
        Blues Hacks 2024.
      </h1>
      <p className="max-w-[700px] text-lg text-muted-foreground">
        Hone your engineering prowess, expand your professional
        network, and vie for top honors at Blues Hacks 2024. Seize 
        the opportunity to claim prizes and gain unparalleled 
        experience in this competitive arena.
      </p>
      <div className="flex gap-4 pt-4">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button className={buttonVariants()}>Sign Up</Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Sign Ups for Blues Hacks 2024 are closed. Please apply next year!</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={siteConfig.links.pdf}
          className={buttonVariants({ variant: "outline" })}
        >
          Participant Package
        </a>
      </div>
    </div>


    <div className="col-span-10 md:col-span-2 flex flex-col items-end p-4">
      <Calendar
      mode="range"
      fromDate={new Date('2024-01-20')}
      toDate={new Date('2024-01-22')}
      className="rounded-md border inline-block"
      />
    </div>

    <iframe 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.1071918498674!2d-79.40481302453493!3d43.666740451556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34bdf4e04f15%3A0x1fe96840ec66d333!2sUniversity%20of%20Toronto%20Schools!5e0!3m2!1sen!2sca!4v1705537995868!5m2!1sen!2sca"
      width="300"
      className="col-span-10 md:col-span-2 w-full md:h-[35vh] p-3 rounded-md border inline-block"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade">
      </iframe>
  </section>
  )
}
