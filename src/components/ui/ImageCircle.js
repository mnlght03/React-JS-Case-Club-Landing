import React from 'react';

export default function ImageCircle({
    classes = '',
    imgSrc = undefined,
    imgAlt = '',
    opacity = '100%',
    ...props
}) {
    return (
        <div
            className={`rounded-full ${classes}`}
            style={{
                background: imgSrc
                    ? `no-repeat center/100% url(${imgSrc})`
                    : `rgb(130 140 163 / ${opacity})`,
                opacity: opacity
            }}
            {...props}
        />
    );
}
