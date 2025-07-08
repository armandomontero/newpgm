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

import { formatDate, formatHora } from '@/lib/formatDate'

import { toast } from 'sonner'

import { CalendarioProps } from "./Calendario.types";
import { data, event, now } from 'jquery'
import { ModalAddEvent } from '../ModalAddEvent'
import { title } from 'process'
import { start } from 'repl'

export function Calendario(props: CalendarioProps) {
    const { empresas, events } = props

    const router = useRouter();
    const [open, setOpen] = useState(false);
    const [onSaveNewEvent, setOnSaveNewEvent] = useState(false);

    const [selectedItem, setselectedItem] = useState<DateSelectArg>();

    const [newEvent, setNewEvent] = useState({
        eventName: "",
        empresaSeleccionada: {
            name: "",
            id: "",
        }
    })

    const handleDateClick = async (selected: DateSelectArg) => {
        setOpen(true)
        setselectedItem(selected)
        //alert(selectedItem?.start)
        
    }

    useEffect(()=>{
        if(onSaveNewEvent && selectedItem?.view.calendar){
            const calendarApi = selectedItem.view.calendar
            calendarApi.unselect()

            const newEventPrisma = {
                
                title : newEvent.eventName,
                start: new Date(selectedItem.start),
                end: new Date(selectedItem.end),
                allDay: false,
                timeFormat: 'H(:mm)'
            };
           
            
            axios.post(`/api/empresa/${newEvent.empresaSeleccionada.id}/evento`, newEventPrisma)
            .then(()=>{
                toast('Evento Creado!');
                router.refresh();
            }).catch(error=>{
                toast('Error al crear')
            })
           setNewEvent({
            eventName: "",
            empresaSeleccionada: {
                name: "",
                id: ""
            }
           })
           setOnSaveNewEvent(false);
        }
    }, [onSaveNewEvent, selectedItem, event])


    const handleEventClick = async (selected: any) => {
        if(window.confirm(
            `¿Estás seguro que deseas eliminar el evento ${selected.event.title}?`
        )){
            try {
                await axios.delete(`/api/event/${selected.event._def.publicId}`);
                toast('Evento eliminado!');
                router.refresh();
            } catch (error) {
                toast('Algo salió mal')
            }
        }
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
                                <p className='text-xs'>{formatDate(currentEvent.start)} - {formatHora(currentEvent.start)}</p>
                                <p className='text-xs'>{formatDate(currentEvent.end)}- {formatHora(currentEvent.end)}</p>
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
                        editable={false}
                        eventTextColor="black"
                        eventOverlap={false}
                        firstDay={1}
                        eventDisplay='auto'
                       eventMinHeight={5}
                       displayEventTime={true}
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
            setOnSaveNewEvent={setOnSaveNewEvent}
            empresas={empresas}
            setNewEvent={setNewEvent}
            />

        </div>
    )
}

function renderEventContent(eventInfo: EventContentArg) {
    return (
        <div className='bg-slate-200 dark: bg-background w-full pl-1 text-xs'>
           
            {eventInfo.event.title + ' ('+formatHora(eventInfo.event.start)+')'}
        </div>
    )
}