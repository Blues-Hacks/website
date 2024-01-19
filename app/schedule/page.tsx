"use client"
import Link from "next/link"
import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import FullCalendar from "@fullcalendar/react"
import timeGridPlugin from '@fullcalendar/timegrid'
import { Calendar } from "@fullcalendar/core"
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react"


function renderEventContent(eventInfo: { timeText: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; event: { title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined } }) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  )
}

export default function SchedulePage() {

  const events = [
    {
      title: 'Normal School Day',
      start: new Date('2024-01-19T12:00:00'),
      end: new Date('2024-01-19T15:00:00')
    },
    {
      title: 'Final Set-up',
      start: new Date('2024-01-19T16:00:00')
    },
    {
      title: 'Opening Ceremonies',
      start: new Date('2024-01-19T17:00:00')
    },
    {
      title: 'Team Formation Event',
      start: new Date('2024-01-19T18:00:00')
    },
    {
      title: 'Project Work Time',
      start: new Date('2024-01-19T19:00:00')
    },
    {
      title: 'Clean-up',
      start: new Date('2024-01-19T20:00:00')
    },
    {
      title: 'Teams will use Saturday as a full work day (online)',
      start: new Date('2024-01-20T09:00:00'),
      end: new Date('2024-01-20T21:00:00')
    },
    {
      title: 'Judges Conference',
      start: new Date('2024-01-21T15:00:00')
    },
    {
      title: 'Closing Ceremonies',
      start: new Date('2024-01-21T16:00:00')
    },
    {
      title: 'Clean-up',
      start: new Date('2024-01-21T17:00:00')
    },
    {
      title: 'Judges are debriefed',
      start: new Date('2024-01-21T09:00:00')
    },
    {
      title: 'Classrooms are open as workspaces',
      start: new Date('2024-01-21T10:00:00')
    },
    {
      title: 'All projects submitted by 11:30',
      start: new Date('2024-01-21T11:00:00'),
      end: new Date('2024-01-21T11:30:00')
    },
    {
      title: 'Teams present projects to judges',
      start: new Date('2024-01-21T12:00:00')
    },
    {
      title: 'Food is served',
      start: new Date('2024-01-21T13:00:00')
    },
    {
      title: 'Workshops/Events',
      start: new Date('2024-01-21T14:00:00')
    }
  ];  

  
  return (
    <section className="container grid items-center flex-row gap-6 pt-4 rounded-md md:pt-5 md:pb-0">
      <FullCalendar
        plugins={[timeGridPlugin]}
        initialView='timeGridThreeDay' // Use the custom 3-day view key
        headerToolbar={{
          left: '',
          center: 'title',
          right: 'prev,next'
        }}
        views={{
          timeGridThreeDay: { // Define the custom 3-day view
            type: 'timeGrid',
            duration: { days: 3 },
            buttonText: '',
            visibleRange: {
              start: '2024-01-19',
              end: '2024-01-22' // End date is exclusive, so this will include January 19 to January 21
            }
          }
        }}
        weekends={true}
        allDaySlot={false}
        events={events}
        nowIndicator={true}
        contentHeight={"75vh"}
        expandRows={true}
        eventContent={renderEventContent}
        slotMinTime={"09:00:00"}
        slotMaxTime={"21:00:00"}
      />
    </section>
  )
}