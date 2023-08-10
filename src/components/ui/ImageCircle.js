import React from "react";

export default function ImageCircle({ classes = '', imgSrc = '', imgAlt = '', opacity = '100%', ...props}) {
    return (
        <div
            className={`rounded-full ${classes}`}
            style={{
                // background: `no-repeat center/${opacity} url(${imgSrc})`
                background: `rgb(130 140 163 / ${opacity})`,
            }}
            {...props}
        />
    );
}
