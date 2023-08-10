import React from 'react';
import Button from '../ui/Button';

export default function EventsGalleryListDesktop({
    events,
    chosen,
    setChosen,
    classes = '',
}) {
    return (
        <div dir='rtl' className={`flex flex-col gap-2 w-[380px] ${classes}`}>
            {events.map((evt, i) => (
                <Button
                    dir='ltr'
                    key={i}
                    classes={`font-semibold text-start ${
                        i === chosen
                            ? 'bg-light_second_grey text-blue'
                            : 'bg-transparent text-second_grey'
                    } `}
                    bigPadding
                    onClick={() => setChosen(i)}
                >
                    {evt}
                </Button>
            ))}
        </div>
    );
}
