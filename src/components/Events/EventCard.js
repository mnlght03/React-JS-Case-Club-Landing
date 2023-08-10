import React, { useContext } from 'react';
import { GlobalContext } from '../../context';
import EventCardDesktop from './EventCardDesktop';
import EventCardMobile from './EventCardMobile';

export default function EventCard({ evt, btnStyle = 'blue', classes = '' }) {
    const { isDesktop } = useContext(GlobalContext);

    return isDesktop ? (
        <EventCardDesktop
            evt={evt}
            btnStyle={btnStyle}
            classes={classes}
        />
    ) : (
        <EventCardMobile
            evt={evt}
            classes={classes}
        />
    );
}
