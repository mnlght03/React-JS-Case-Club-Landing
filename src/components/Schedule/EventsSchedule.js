import React, { useEffect, useState } from 'react';
import EventsList from './EventsList';
import { bigTextDesktop, bigTextMobile } from '../../utils';
import Section from '../ui/Section';
import ScheduleService from '../../services/ScheduleService';

export default function EventsSchedule() {
  const [events, setEvents] = useState([]);

  const fetchEvents = async () => {
    const events = await ScheduleService.getAll();
    setEvents(events);
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <Section bgColor="bg-beige" id="schedule">
      <h1
        className={`text-center font-semibold mt-8 lg:mt-16 ${bigTextMobile} ${bigTextDesktop}`}
      >
        Расписание мероприятий
      </h1>
      <EventsList
        classes="w-full mt-6 xl:mt-12"
        events={events}
      />
    </Section>
  );
}
