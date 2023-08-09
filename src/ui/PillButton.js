import React from 'react';

export default function PillButton({
    classes = '',
    children = null,
    ...props
}) {
    return (
        <button
            className={`whitespace-nowrap rounded-full py-2 px-6 border-solid border-2 ${classes}`}
            {...props}
        >
            {children}
        </button>
    );
}
