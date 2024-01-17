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

function updateTimer() {
  var future = Date.parse("2024-01-19T14:00:00Z");
  var now = new Date();
  var diff = future - now;

  var days = Math.floor(diff / (1000*60*60*24));
  var hours = Math.floor(diff / (1000*60*60));
  var mins = Math.floor(diff / (1000*60));
  var secs = Math.floor(diff / 1000);

  var d = days;
  var h = hours - days * 24;
  var m = mins - hours * 60;
  var s = secs - mins * 60;

  const timerElement = document.getElementById("timer");
  if (timerElement) {
      timerElement.innerHTML =
          '<div class="flex flex-col items-center"><span class="text-4xl font-bold">' + d + '</span><span class="text-sm">days</span></div>' +
          '<div class="flex flex-col items-center"><span class="text-4xl font-bold">' + h + '</span><span class="text-sm">hours</span></div>' +
          '<div class="flex flex-col items-center"><span class="text-4xl font-bold">' + m + '</span><span class="text-sm">minutes</span></div>' +
          '<div class="flex flex-col items-center"><span class="text-4xl font-bold">' + s + '</span><span class="text-sm">seconds</span></div>';
  }

}
setInterval(updateTimer, 1000);

export default function IndexPage() {
  return (
    <section className="container grid grid-cols-10 items-center w-screen h-[80vh] align-middle">
    {/* Left side (70%) */}
    <div className="col-span-6 flex flex-col items-start gap-2">
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
        <Link
          target="_blank"
          rel="noreferrer"
          href={siteConfig.links.github}
          className={buttonVariants({ variant: "outline" })}
        >
          Participant Package
        </Link>
      </div>
    </div>

    <div className="col-span-2 flex flex-col items-start">
      <Calendar
      mode="range"
      fromDate={new Date('2024-01-20')}
      toDate={new Date('2024-01-22')}
      className="rounded-md border inline-block"
      />
    </div>
    <div className="col-span-2 pl-10 flex flex-col items-start">
      <div id="timer" className="flex flex-row gap-x-3"></div>
    </div>
  </section>
  )
}
