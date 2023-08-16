import React, { useState, useRef } from 'react';
import RoundCard from './RoundCard';
import EventCardButtons from '../Events/EventCardButtons';
import PlusButton from './PlusButton';
import { smTextDesktop, smallTextDesktop } from '../../utils';

export default function DropdownInfoCard({ title, text, classes = '' }) {
    const [isOpened, setIsOpened] = useState(false);

    const buttonRef = useRef(null);

    const clickFunction = () => {   
        setIsOpened(!isOpened);
        buttonRef.current.click()
    }

    return (
        <RoundCard onClick={clickFunction} classes={'w-full bg-white cursor-pointer ' + classes}>
            <div className="flex items-center">
                <p className={`font-semibold ${smallTextDesktop}`}>{title}</p>
                <PlusButton
                    classes="ml-auto"
                    ref={buttonRef}
                />
            </div>
            {isOpened && (
                <div className="mt-4">
                    {text.split('\n').map((paragraph) => (
                        <p
                            className={` ${smallTextDesktop}`}
                        >
                            {paragraph}
                        </p>
                    ))}
                </div>
            )}
        </RoundCard>
    );
}
