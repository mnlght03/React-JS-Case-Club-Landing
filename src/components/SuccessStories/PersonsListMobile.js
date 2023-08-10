import React from 'react';
import ImageCircle from '../ui/ImageCircle';

export default function PersonsListMobile({ persons, active, setActive }) {
    return (
        <div className="flex gap-4">
            {persons.map((person, i) => (
                <ImageCircle key={i} classes={`w-[60px] h-[60px]`} opacity={i === active ? '100%' : '20%'} onClick={() => setActive(i)} />
            ))}
        </div>
    );
}
