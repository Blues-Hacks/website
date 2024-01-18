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
import Head from "next/head"

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
        <Head>
          <title>{`${siteConfig.name} - Your Page Specific Title`}</title>
          <meta name="description" content={siteConfig.description} />
          
          {/* Theme Color for Light and Dark Mode */}
          <meta name="theme-color" content="white" media="(prefers-color-scheme: light)" />
          <meta name="theme-color" content="black" media="(prefers-color-scheme: dark)" />

          {/* Icons */}
          <link rel="icon" href="/favicon.ico" />
          <link rel="shortcut icon" href="/favicon-16x16.png" />
          <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

          {/* Add more metadata tags as needed */}
        </Head>
        <body
          className={cn(
            "min-h-screen overflow-x-hidden bg-background font-sans antialiased",
            fontSans.variable
          )}
        >{isLoading && isHome ? (
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <SplashScreen finishLoading={() => {return setLoading(false)}}/>
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
