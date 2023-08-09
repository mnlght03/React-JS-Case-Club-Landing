import React from 'react';

export default function ChatMessage({
    classes = '',
    children,
    ...props
}) {
    return (
        <div className={`rounded-[40px] inline-flex items-center py-2 px-4 xl:py-4 xl:px-6 bg-white ${classes}`} {...props}>
            {children}
        </div>
    );
}
