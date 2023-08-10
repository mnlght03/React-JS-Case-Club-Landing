import React, { useState } from 'react';
import RoundCard from '../ui/RoundCard';
import { smTextDesktop, smallTextDesktop } from '../../utils';
import EventCardButtons from './EventCardButtons';
import PlusButton from '../ui/PlusButton';
import PillButton from '../ui/PillButton';

export default function EventCardDesktop({ evt, btnStyle = 'blue', classes = '' }) {
    const [isOpened, setIsOpened] = useState(false);

    return (
        <RoundCard classes={"w-full bg-white " + classes}>
            <div className='flex items-center'>
                <span className={`w-5/12 ${smallTextDesktop}`}>{evt.date}</span>
                <div>
                    <p className={`font-semibold ${smallTextDesktop}`}>{evt.name}</p>
                    <EventCardButtons classes='mt-2' keywords={evt.keywords} style={btnStyle} />
                </div>
                <PlusButton border classes='ml-auto' onClick={() => setIsOpened(!isOpened)}/>
            </div>
            {isOpened && (
                <div className='flex items-center border-solid border-second_grey/20 border-t-[1px] mt-8'>
                    <p className={`text-second_grey font-semibold w-9/12 mt-6 ${smTextDesktop}`}>{evt.description}</p>
                    <PillButton classes={`bg-blue text-white ml-auto mt-6 ${smTextDesktop}`}>Зарегистрироваться</PillButton>
                </div>
            )}
        </RoundCard>
    );
}
