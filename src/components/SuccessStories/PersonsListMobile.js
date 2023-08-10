import React, { useState } from 'react';
import ImageCircle from '../ui/ImageCircle';

export default function PersonsListMobile({ persons, active, setActive }) {
    const [offsetX, setOffsetX] = useState(0);
    const [startX, setStartX] = useState(0);

    const handleTouchStart = (e) => {
        e.target.closest('div.flex').style.transition = 'none';
        setStartX(e.touches[0].clientX);
    };

    const handleTouchMove = (e) => {
        const scrollerWidth = e.target.closest('div.flex').offsetWidth;
        const padding = 48;
        console.log(scrollerWidth, offsetX, window.innerWidth - padding, scrollerWidth + offsetX);
        setOffsetX(offsetX + e.touches[0].clientX - startX);
        setStartX(e.touches[0].clientX);
    }

    const handleTouchEnd = (e) => {
        if (offsetX > 0) {
            e.target.closest('div.flex').style.transition = 'transform 0.2s ease-out';
            setOffsetX(0);
            return;
        }

        const scrollerWidth = e.target.closest('div.flex').offsetWidth;
        const padding = 48;

        if (scrollerWidth + offsetX < window.innerWidth - padding) {
            e.target.closest('div.flex').style.transition = 'transform 0.2s ease-out';
            setOffsetX(window.innerWidth - padding - scrollerWidth);
            return;
        }
    }


    return (
        <div className="flex w-fit gap-4" style={{
            transform: `translateX(${offsetX}px)`,
            transition: 'none'
        }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            {persons.map((person, i) => (
                <ImageCircle key={i} classes={`w-[60px] h-[60px]`} opacity={i === active ? '100%' : '20%'} onClick={() => setActive(i)} />
            ))}
        </div>
    );
}
