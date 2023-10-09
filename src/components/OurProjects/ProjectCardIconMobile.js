import React from 'react';

export default function ProjectCardIconMobile({
    iconSrc,
    iconAlt = '',
    classes = ''
}) {
    return (
        <div
            className={
            `flex align-center rounded-lg items-center px-4 py-2 w-[120px] h-[40px] 
                ${classes ? classes : 'bg-white'}`
            }
        >
            <img
                src={iconSrc}
                alt={iconAlt}
            />
        </div>
    );
}
