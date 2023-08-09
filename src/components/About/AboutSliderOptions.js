import React from 'react';

export default function AboutSliderOptions({
    current = 0,
    options,
    classes = '',
    setOption,
    ...props
}) {
    return (
        <div className={classes}>
            {options.map((option, i) => (
                <p
                    key={i}
                    onClick={() => setOption(i)}
                    className={`${i === current ? 'text-white' : 'text-white/40'} ${i !== 0 ? 'mt-6' : ''} w-fit cursor-pointer`}
                >
                    <span className={`w-6 h-6 inline-block rounded-full ${i === current ? 'bg-white' : 'bg-transparent'} mr-4 align-middle`}></span>
                    {option}
                </p>
            ))}
        </div>
    );
}
