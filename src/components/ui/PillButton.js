import React from 'react';

export default function PillButton({
    classes = '',
    children = null,
    smallPadding = false,
    ...props
}) {
    return (
        <button
            className={`whitespace-nowrap rounded-full ${smallPadding ? 'py-2 px-6' : 'py-3 px-8'} border-solid border-2 ${classes}`}
            {...props}
        >
            {children}
        </button>
    );
}
