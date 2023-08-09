import React from 'react';

export default function PillButton({
    classes = '',
    children = null,
    ...props
}) {
    return (
        <button
            className={`whitespace-nowrap rounded-full py-3 px-8 border-solid border-2 ${classes}`}
            {...props}
        >
            {children}
        </button>
    );
}
