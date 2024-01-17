"use client"
import Link from "next/link"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Terminal } from "lucide-react"

export default function UpdatePage() {
    const alerts = [
        {
            icon: <Terminal className="h-4 w-4"/>,
            title: "New Feature Release",
            description: "We've rolled out the new chat feature. Check it out in the communications tab."
        },
        {
            icon: <Terminal className="h-4 w-4"/>,
            title: "Scheduled Maintenance",
            description: "Our site will be undergoing scheduled maintenance on Saturday, 3 PM GMT."
        },
        {
            icon: <Terminal className="h-4 w-4"/>,
            title: "Survey Reminder",
            description: "Don't forget to fill out our user experience survey - your feedback is valuable!"
        },
        {
            icon: <Terminal className="h-4 w-4"/>,
            title: "Version Update",
            description: "Version 2.1 is now live with enhanced security features and improved UI."
        },
        {
            icon: <Terminal className="h-4 w-4"/>,
            title: "Community Event",
            description: "Join us for our annual virtual meetup on April 22nd. Exciting talks and networking opportunities await!"
        },
        {
            icon: <Terminal className="h-4 w-4"/>,
            title: "Community Event",
            description: "Join us for our annual virtual meetup on April 22nd. Exciting talks and networking opportunities await!"
        },
        {
            icon: <Terminal className="h-4 w-4"/>,
            title: "Community Event",
            description: "Join us for our annual virtual meetup on April 22nd. Exciting talks and networking opportunities await!"
        },
        {
            icon: <Terminal className="h-4 w-4"/>,
            title: "Community Event",
            description: "Join us for our annual virtual meetup on April 22nd. Exciting talks and networking opportunities await!"
        },
        {
            icon: <Terminal className="h-4 w-4"/>,
            title: "Community Event",
            description: "Join us for our annual virtual meetup on April 22nd. Exciting talks and networking opportunities await!"
        }
    ];

    return (
    <section className="container grid grid-cols-10 items-center gap-6 pb-8 pt-6 w-screen md:py-10">
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
        <ScrollArea className="w-full h-[80vh]">
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
