import React from 'react';

export default function Button({ classes = '', children = null, ...props }) {
    return <button className={`py-2 px-4 rounded ${classes}`} {...props}>{children}</button>;
}
