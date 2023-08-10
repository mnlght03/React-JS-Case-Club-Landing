import React, { useState } from 'react';

export default function PlusButton({ classes = '', border = false, onClick = () => {} }) {
    const [isClicked, setIsClicked] = useState(false);
    return (
        <button
            className={
                classes +
                ' min-w-12 min-h-12 w-12 h-12 inline-block rounded-full flex items-center justify-center cursor-pointer ' +
                (border ? 'border-solid border-2 border-blue' : '')
            }
            onClick={() => {
                setIsClicked(!isClicked);
                onClick();
            }}
        >
            <div
                className={
                    'inline-block min-w-4 min-h-0.5 w-4 h-0.5 relative ' +
                    'before:bg-blue before:absolute before:left-0 before:top-0 before:bottom-0 before:right-0 before:rotate-90 ' +
                    'after:bg-blue after:absolute after:left-0 after:top-0 after:bottom-0 after:right-0 after:rotate-180 ' +
                    (isClicked ? 'rotate-45' : '')
                }
            ></div>
        </button>   
    );
}
