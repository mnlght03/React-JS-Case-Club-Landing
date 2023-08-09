import React from 'react';
import Section from './Section';

export default function ChronoLine({ startDate, endDate, ...props }) {
    return (
        <Section
            bgColor="bg-black"
            wrapperClasses="py-4 px-4 xl:px-48 xl:py-8"
        >
            <div className="flex ">
                <span className="text-white">{startDate}</span>
                <div className="flex w-full justify-center items-center gap-1 before:content-[''] before:w-full before:h-px before:mx-4 before:bg-white/20 after:content-[''] after:w-full after:h-px after:mx-4 after:bg-white/20">
                    <div className="min-w-[6px] min-h-[6px] bg-white rounded-full"></div>
                    <div className="min-w-[6px] min-h-[6px] bg-white rounded-full"></div>
                    <div className="min-w-[6px] min-h-[6px] bg-white rounded-full"></div>
                </div>
                <span className="text-white">{endDate}</span>
            </div>
        </Section>
    );
}
