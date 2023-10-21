import React, {useContext, useEffect, useState} from 'react';
import {GlobalContext} from '../../context';
import EventsGalleryDesktop from './EventsGalleryDesktop';
import EventsGalleryMobile from './EventsGalleryMobile';
import EventService from '../../services/EventService';
import Section from "../ui/Section";

export default function Events() {
    const {isDesktop} = useContext(GlobalContext);

    const [events, setEvents] = useState([]);

    const fetchEvents = async () => setEvents(await EventService.getAll());

    useEffect(() => {
        fetchEvents();
    }, []);

    return (
        events.length > 0 && (
            <Section bgColor="bg-beige" id="events" classes={isDesktop ? '' : 'w-screen'}>
            {isDesktop
                ? <EventsGalleryDesktop events={events}/>
                : <EventsGalleryMobile events={events}/>
            }
            </Section>
        )
    );
}
