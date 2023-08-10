import React, { useEffect, useState } from 'react';
import { bigTextDesktop, bigTextMobile } from '../../utils';
import Section from '../ui/Section';
import EventsService from './EventsService';
import EventsList from './EventsList';

export default function EventsSchedule() {
    const [schedule, setSchedule] = useState([]);

    const fetchEvents = async () => {
        const schedule = await EventsService.getEventsSchedule();
        setSchedule(schedule);
    };

    useEffect(() => {
        fetchEvents();
    }, []);

    return (
        <Section bgColor="bg-beige">
            <h1 className={`text-center font-semibold mt-16 ${bigTextMobile} ${bigTextDesktop}`}>
                Расписание мероприятий
            </h1>
            <EventsList
                classes="w-full mt-6 xl:mt-12"
                events={schedule}
            />
        </Section>
    );
}
