import React, { useContext } from 'react';
import EventCardDesktop from './EventCardDesktop';
import EventCardMobile from './EventCardMobile';
import { GlobalContext } from '../../context';

export default function EventCard({ event, btnStyle = 'blue', classes = '' }) {
    const { isDesktop } = useContext(GlobalContext);

    return isDesktop ? (
        <EventCardDesktop
            event={event}
            btnStyle={btnStyle}
            classes={classes}
        />
    ) : (
        <EventCardMobile
            event={event}
            classes={classes}
        />
    );
}
