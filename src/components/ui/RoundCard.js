import React from 'react';

export default function RoundCard({ classes = '', children = null, ...props }) {
    return (
        <div
            className={`rounded-3xl p-6 ${classes}`}
            {...props}
        >
            {children}
        </div>
    );
}
