"use client"
import Link from "next/link"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Coins, Slack, Terminal, X, Siren } from "lucide-react"

export default function UpdatePage() {

    return (
    <section className="items-center mx-10 gap-6 pb-8 pt-6 md:py-10">
        <h6 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
            Watch the Livestream here!
        </h6>
        <div className="h-[4vh]"></div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/LyJ-LAK_Yvg?si=VtjrjaiPmtzl-ts6" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>    </section>
    )
}
