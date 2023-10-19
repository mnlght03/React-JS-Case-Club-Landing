import React from 'react';

function Input({
    type,
    placeholder,
    value,
    setValue,
    classes='',
    ...props
}) {
    return (
        <input
            type={type}
            placeholder={placeholder}
            className={
            'p-4 bg-transparent border-b border-white/50 text-white '
             + ' focus:border-white focus:outline-none placeholder:text-white/50 '
             + classes
            }
            value={value}
            onChange={(e) => setValue && setValue(e.target.value)}
            {...props}
        />
    );
}

export default Input;