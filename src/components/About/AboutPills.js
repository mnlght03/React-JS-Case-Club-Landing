import React from 'react';
import PillButton from '../ui/PillButton';

export default function AboutPills({ items, classes = '' }) {
    items = items.length > 8 ? items : [...items, ...items];

    return (
        <div className={"flex justify-center gap-4 h-max max-w-[2400px] " + classes}>
            {items.map((item, i) => (
                <PillButton
                    classes={
                        i % 3 === 0
                        ? 'font-semibold text-black bg-white border-white'
                        : 'font-semibold text-white border-white/20'
                    }
                    key={i}
                >
                    {item}
                </PillButton>
            ))}
        </div>
    );
}
