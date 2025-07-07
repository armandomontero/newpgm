'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

import multiMonthPlugin from '@fullcalendar/multimonth'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactorPlugin from '@fullcalendar/interaction'
import listPlugin from '@fullcalendar/list'
import { DateSelectArg, EventContentArg } from '@fullcalendar/core/index.js'
import esLocale from '@fullcalendar/core/locales/es';


import axios from 'axios'

import { formatDate } from '@/lib/formatDate'

import { toast } from 'sonner'

import { CalendarioProps } from "./Calendario.types";
import { event } from 'jquery'
import { ModalAddEvent } from '../ModalAddEvent'

export function Calendario(props: CalendarioProps) {
    const { empresas, events } = props

    const router = useRouter();
    const [open, setOpen] = useState(false);
    const [onSaveNewEvent, setonSaveNewEvent] = useState(false);

    const [selectedItem, setselectedItem] = useState<DateSelectArg>();

    const [newEvent, setnewEvent] = useState({
        eventName: "",
        empresaSeleccionada: {
            name: "",
            id: "",
        }
    })

    const handleDateClick = async (selected: DateSelectArg) => {
        setOpen(true)
        setselectedItem(selected)
    }
    const handleEventClick = () => {

    }

    return (
        <div>
            <div className='md: flex gap-x-3'>
                <div className='w-[200px] relative'>
                    <div className='overflow-auto absolute left-0 top-0 h-full w-full'>
                        <p className='mb-3 text-xl'>Listado de Tareas</p>
                        {events.map((currentEvent) => (
                            <div key={currentEvent.idEvent} className='p-4 rounded-lg shadow-md mb-2 bg-slate-200 dark: bg-background'>
                                <p className='font-bold'>{currentEvent.title}</p>
                                <p>{formatDate(currentEvent.start)}</p>
                            </div>
                        )
                        )}
                    </div>
                </div>
                <div className='flex-1 calendar-container '>
                    <FullCalendar
                        plugins={[dayGridPlugin, timeGridPlugin, interactorPlugin, listPlugin, multiMonthPlugin]}
                        locale="Eslocale"
                        headerToolbar={{
                            left: "prev, next, today",
                            center: "title",
                            right: "timeGridDay, timeGridWeek, dayGridMonth, multiMonthYear"

                        }}
                        buttonText={{
                            today: 'Hoy',
                            day: 'Día',
                            week: 'Semana',
                            month: 'Mes',
                            year: 'Año'
                        }}
                        height="80vh"
                        initialView='timeGridWeek'
                        allDaySlot={false}
                        timeHint=''
                        weekends={true}
                        events={events}
                        eventContent={renderEventContent}
                        editable={true}
                        firstDay={1}
                        slotDuration= '00:15'
                        slotLabelInterval= '01:00'
                        selectable={true}
                        selectMirror={true}
                        select={handleDateClick}
                        eventClick={handleEventClick}
                    />
                </div>
            </div>
            <ModalAddEvent 
            open = {open}
            setOpen={setOpen}
            setOnSaveNewEvent={setonSaveNewEvent}
            empresas={empresas}
            setNewEvent={setnewEvent}
            />

        </div>
    )
}

function renderEventContent(eventInfo: EventContentArg) {
    return (
        <div className='bg-slate-200 dark: bg-background w-full p-1'>
            <i>{eventInfo.event.title}</i>
        </div>
    )
}