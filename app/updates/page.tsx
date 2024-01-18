"use client"
import Link from "next/link"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Coins, Slack, Terminal, X, Siren } from "lucide-react"

export default function UpdatePage() {
    const alerts = [
        {
            icon: <Siren className="h-4 w-4"/>,
            title: "Prompt Released",
            description: "Check your emails for the prompt! Happy Hacking!"
        },
        {
            icon: <Slack className="h-4 w-4"/>,
            title: "Join Slack",
            description: "Make sure to join the slack channel to get more updates!"
        },
        {
            icon: <Coins className="h-4 w-4"/>,
            title: "Bring Change",
            description: "Bring some change to Blues Hacks. You'll have the chance to win more..."
        },
        {
            icon: <X className="h-4 w-4"/>,
            title: "Sign Ups Closed",
            description: "We've closed the sign ups for Blues Hacks 2024."
        },
    ];

    return (
    <section className="container grid grid-cols-10 items-center gap-6 pb-8 pt-6 md:py-10">
        <div className="col-span-4 flex max-w-[480px] flex-col items-start gap-2">
            <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
            Check in to see updates from the Blues Hacks Team
            </h1>
            <p className="max-w-[500px] text-lg text-muted-foreground">
            Make sure to stay updated!
            </p>
        </div>
        <div className="w-[1vw]"></div>
        <div className="col-span-5 flex flex-col items-start">
        <ScrollArea className="w-full h-[75vh]">
            {alerts.map((alert, index) => (
            <div key={index}>
                <Alert className="w-[97%]">
                    {alert.icon}
                    <AlertTitle>{alert.title}</AlertTitle>
                    <AlertDescription>
                        {alert.description}
                    </AlertDescription>
                </Alert>
              <div className="h-4"></div> {/* Divider between alerts */}
            </div>
        ))}
        </ScrollArea>
    </div>
    </section>
    )
}
