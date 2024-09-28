'use client'
import { Calendar } from "../n/components/ui/calendar"
import React from "react"

export default function Calendarx(){
    const [date, setDate] = React.useState<Date | undefined>(new Date())
    
    return (
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
      />
    )
}
