import React from 'react';

export default function Button({ classes = '', children = null, ...props }) {
    return <button className={`whitespace-nowrap py-2 px-4 rounded-lg ${classes}`} {...props}>{children}</button>;
}
