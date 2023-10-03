import React from 'react';
import Button from '../ui/Button';

export default function EventsGalleryListDesktop({
    events,
    chosenId,
    setChosen,
    classes = '',
}) {
    return (
        <div dir='rtl' className={`flex flex-col gap-2 w-[380px] ${classes}`}>
            {events.map((event, i) => (
                <Button
                    dir='ltr'
                    key={event.id ?? i}
                    classes={`font-semibold text-start ${
                        event.id === chosenId
                            ? 'bg-light_second_grey text-blue'
                            : 'bg-transparent text-second_grey'
                    } `}
                    bigPadding
                    onClick={() => setChosen(event)}
                >
                    {event.name}
                </Button>
            ))}
        </div>
    );
}
