import React from 'react';
import EventCard from './EventCard';

export default function EventsList({ events, classes = '' }) {
  return (
    <div className={classes}>
      {events.map((evt, i) => (
        <EventCard
          key={evt.id ?? i}
          event={evt}
          btnStyle={evt.tagColor}
          classes="mt-4"
        />
      ))}
    </div>
  );
}
