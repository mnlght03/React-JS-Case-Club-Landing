import React, { useState } from 'react';

export default function DoublePillButton({
    activeSide = 'left',
    firstChild,
    secondChild,
    disabled=false,
    leftDisabled = false,
    rightDisabled = false,
    smallPadding = false,
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
                    `${isLeftActive 
                        ? activeClassname
                        : inactiveClassname
                    } 
                    border-r-0 rounded-l-xl 
                    ${smallPadding 
                        ? 'py-1.5 px-4'
                        : 'py-3 px-8'
                    }`
                }
                onClick={() => setIsLeftActive(true)}
            >
                {firstChild}
            </button>
            <button
                disabled={disabled || rightDisabled}
                className={
                    `${!isLeftActive 
                        ? activeClassname 
                        : inactiveClassname
                    } 
                    border-l-0 rounded-r-xl 
                    ${smallPadding 
                        ? 'py-1.5 px-4' 
                        : 'py-3 px-8'
                    }`
                }
                onClick={() => setIsLeftActive(false)}
            >
                {secondChild}
            </button>
        </div>
    );
}
