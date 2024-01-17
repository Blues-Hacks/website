"use client"
import "@/styles/globals.css"
import { Metadata } from "next"

import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { SiteHeader } from "@/components/site-header"
import { ThemeProvider } from "@/components/theme-provider"
import SplashScreen from "@/components/splashscreen"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  const pathname = usePathname()
  const isHome = pathname === "/"
  const [isLoading, setLoading] = useState(isHome)

  useEffect(() => {
    if(isLoading){
      return
    }
  }, [isLoading])

  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >{isLoading && isHome ? (
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <SplashScreen finishLoading={() => setLoading(false)}/>
          </ThemeProvider>
          ):
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="relative flex min-h-screen flex-col">
              <SiteHeader />
              <div className="flex w-screen">{children}</div>
            </div>
          </ThemeProvider>
          }
        </body>
      </html>
    </>
  )
}
