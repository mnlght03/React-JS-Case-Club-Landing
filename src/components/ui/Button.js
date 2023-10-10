import React from 'react';

export default function Button({
    classes = '',
    bigPadding = false,
    smallPadding = false,
    children = null,
    ...props
}) {
    return (
        <button
            className={
                `${bigPadding 
                    ? 'p-4' 
                    : smallPadding 
                        ? 'p-2' 
                        : 'py-2 px-4'
                } rounded ${classes}`
            }
            {...props}
        >
            {children}
        </button>
    );
}
