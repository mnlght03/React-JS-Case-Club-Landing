import {useState} from "react";

export function useSlider(minOffset, maxOffset) {
    const [offset, setOffset] = useState(0);
    const [startX, setStartX] = useState(0);

    const handleTouchStart = (event) => {
        event.target.closest('.slider').style.transition = 'none';
        setStartX(event.targetTouches[0].clientX);
    }

    const handleTouchMove = (event) => {
        const clientX = event.targetTouches[0].clientX;
        setOffset(offset + clientX - startX);
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