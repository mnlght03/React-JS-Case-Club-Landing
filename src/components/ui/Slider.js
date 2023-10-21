import React, {useEffect} from 'react';
import {useSlider} from "../../hooks/useSlider";

function Slider({minOffset, maxOffset, classes = '', children}) {
    const {
        offset,
        setOffset,
        handleTouchStart,
        handleTouchMove,
        handleTouchEnd,
    } = useSlider(minOffset, maxOffset);

    // useEffect(() => {
    //     setOffset(minOffset);
    // }, [children, minOffset, maxOffset]);

    return (
        <div
            className={'slider w-full overflow-x-visible ' + classes}
            style={{transform: `translateX(${offset}px)`}}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            {children}
        </div>
    );
}

export default Slider;
