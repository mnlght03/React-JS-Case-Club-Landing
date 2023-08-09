import React from 'react';

export default function Section({
    classes = '',
    wrapperClasses = '',
    bgColor = 'bg-transparent',
    children,
    ...props
}) {
    return (
        <div className={`w-full flex justify-center ${bgColor} ${wrapperClasses}`}>
            <div
                className={`max-w-[1440px] w-full ${classes}`}
                {...props}
            >
                {children}
            </div>
        </div>
    );
}
