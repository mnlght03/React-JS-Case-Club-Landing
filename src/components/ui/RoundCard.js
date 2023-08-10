import React from 'react';

export default function RoundCard({ classes = '', children = null, smallPadding = false, ...props }) {
    return (
        <div
            className={`rounded-3xl ${smallPadding ? 'p-4' : 'p-6'} ${classes}`}
            {...props}
        >
            {children}
        </div>
    );
}
