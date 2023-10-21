import {useState} from "react";

export function useSlider(minOffset, maxOffset) {
    const [offset, setOffset] = useState(minOffset);
    const [startX, setStartX] = useState(0);
    const [clientX, setClientX] = useState(0)
    const [startTime, setStartTime] = useState(0);

    const SCROLL_SPEED_MULTIPLIER = 1;
    const SCROLL_ACCELERATION_MULTIPLIER = 100;

    const handleTouchStart = (event) => {
        event.target.closest('.slider').style.transition = 'none';
        setStartX(event.targetTouches[0].clientX);
        setClientX(event.targetTouches[0].clientX);
        setStartTime(event.timeStamp);
    }


    const handleTouchMove = (event) => {
        setOffset(offset + (event.targetTouches[0].clientX - clientX) * SCROLL_SPEED_MULTIPLIER);
        setClientX(event.targetTouches[0].clientX);
    }

    const handleTouchEnd = (event) => {
        event.target.closest('.slider').style.transition = 'transform 0.2s ease-out';

        const time = event.timeStamp - startTime;

        const delta = clientX - startX;

        const newOffset = offset + delta * SCROLL_ACCELERATION_MULTIPLIER / time;

        setOffset(newOffset);

        if (newOffset > minOffset) setOffset(minOffset);
        if (newOffset < -maxOffset) setOffset(-maxOffset);
    }

    return {
        offset,
        setOffset,
        handleTouchStart,
        handleTouchMove,
        handleTouchEnd,
    }
}