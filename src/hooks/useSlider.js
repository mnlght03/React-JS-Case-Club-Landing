import {useState} from "react";

export function useSlider(minOffset, maxOffset) {
    const [offset, setOffset] = useState(minOffset);
    const [startX, setStartX] = useState(0);

    const handleTouchStart = (event) => {
        // event.target.closest('.slider').style.transition = 'none';
        setStartX(event.targetTouches[0].clientX);
    }

    const SCROLL_SPEED_MULTIPLIER = 1.52;

    const handleTouchMove = (event) => {
        const clientX = event.targetTouches[0].clientX;
        setOffset(offset + (clientX - startX) * SCROLL_SPEED_MULTIPLIER);
        setStartX(clientX);
    }

    const handleTouchEnd = (event) => {
        event.target.closest('.slider').style.transition = 'transform 0.2s ease-out';
        if (offset > minOffset) setOffset(minOffset);
        if (offset < -maxOffset) setOffset(-maxOffset);
    }

    return {
        offset,
        handleTouchStart,
        handleTouchMove,
        handleTouchEnd,
    }
}