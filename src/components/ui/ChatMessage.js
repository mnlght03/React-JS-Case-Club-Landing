import React from 'react';

export default function ChatMessage({
    classes = '',
    children,
    ...props
}) {
    return (
        <span className={`rounded-3xl inline-flex items-center py-2 px-4 xl:py-4 xl:px-6 ${classes}`} {...props}>
            {children}
        </span>
    );
}
