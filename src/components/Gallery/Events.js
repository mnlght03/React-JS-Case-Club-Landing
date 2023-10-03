import React, { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../../context';
import EventsGalleryDesktop from './EventsGalleryDesktop';
import EventsGalleryMobile from './EventsGalleryMobile';
import EventService from '../../services/EventService';

export default function Events() {
  const { isDesktop } = useContext(GlobalContext);

  const [events, setEvents] = useState([]);

  const fetchEvents = async () => setEvents(await EventService.getAll());

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    events.length > 0 &&
    (isDesktop ? <EventsGalleryDesktop events={events} /> : <EventsGalleryMobile />)
  );
}
