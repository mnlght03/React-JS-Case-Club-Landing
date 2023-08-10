import React, { useState } from 'react';

export default function DoublePillButton({
    activeSide = 'left',
    firstChildren,
    secondChildren,
    disabled=false,
    leftDisabled = false,
    rightDisabled = false,
    classes='',
}) {
    const [isLeftActive, setIsLeftActive] = useState(activeSide === 'left');

    const activeClassname = 'bg-white border-solid border-2 border-white text-black font-semibold';
    const inactiveClassname = 'bg-black border-solid border-2 border-white/40 text-white font-semibold';

    return (
        <div className={'inline-grid grid-rows-1 grid-cols-2 ' + classes}>
            <button
                disabled={disabled || leftDisabled}
                className={
                    `${isLeftActive ? activeClassname : inactiveClassname} border-r-0 rounded-l-xl py-3 px-8`
                }
                onClick={() => setIsLeftActive(true)}
            >
                {firstChildren}
            </button>
            <button
                disabled={disabled || rightDisabled}
                className={
                    `${!isLeftActive ? activeClassname : inactiveClassname} border-l-0 rounded-r-xl py-3 px-8`
                }
                onClick={() => setIsLeftActive(false)}
            >
                {secondChildren}
            </button>
        </div>
    );
}
