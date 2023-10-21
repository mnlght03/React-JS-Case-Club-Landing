import React, {useEffect} from 'react';
import {useSlider} from "../../hooks/useSlider";

function Slider({children, classes}) {
    return (
        <div
            className={'slider w-full overflow-x-scroll scrollbar-none ' + classes}
        >
            {children}
        </div>
    );
}

export default Slider;
