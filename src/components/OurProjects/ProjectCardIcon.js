import React from 'react';

export default function ProjectCardIcon({ imgSrc, imgAlt = '', classes = '' }) {
    return (
        <div className={`flex align-center rounded-2xl items-center px-4 py-2 w-[240px] h-[80px] ${classes ? classes : 'bg-white'}`}>
            <img
                src={imgSrc}
                alt={imgAlt}
            />
        </div>
    );
}
