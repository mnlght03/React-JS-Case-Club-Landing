import React from 'react';

export default function Button({ classes, children, ...props }) {
    return <button className={`py-2 px-4 rounded-lg ${classes}`} {...props}>{children}</button>;
}
