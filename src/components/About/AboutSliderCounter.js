import React from 'react';

export default function AboutSliderCounter({
    current = 0,
    total = 1,
    classes = '',
    setCurrent = (i) => {},
}) {
    return (
        <div className={`${classes}`}>
            {[...Array(total).keys()].map((i) => (
                <span
                    key={i}
                    className={`inline-block relative w-16 xl:w-24 h-[2px] bg-white/40 rounded-sm ${
                        i !== 0 ? 'ml-2' : ''
                    }
                        after:content[''] after:absolute after:top-0 after:left-0 after:h-[2px] after:rounded-l-sm after:bg-white
                        ${i < current ? 'after:w-full' : i === current ? 'after:w-7/12' : 'after:w-0'}
                    `}
                    onClick={() => setCurrent(i)}
                ></span>
            ))}
        </div>
    );
}
