import React, { useState } from 'react';
import EventCardButtons from './EventCardButtons';
import RoundCard from '../ui/RoundCard';
import { smTextDesktop, smallTextDesktop } from '../../utils';
import PlusButton from '../ui/PlusButton';
import PillButton from '../ui/PillButton';
import NewTabLink from '../ui/NewTabLink';

export default function EventCardDesktop({ event, btnStyle = 'blue', classes = '' }) {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <RoundCard classes={'w-full bg-white ' + classes}>
      <div className="flex items-center">
        <span className={`w-5/12 ${smallTextDesktop}`}>{event.date}</span>
        <div>
          <p className={`font-semibold ${smallTextDesktop}`}>{event.name}</p>
          <EventCardButtons
            classes="mt-2"
            keywords={[event.firstTag, event.secondTag]}
            style={btnStyle}
          />
        </div>
        <PlusButton
          border
          classes="ml-auto"
          onClick={() => setIsOpened(!isOpened)}
        />
      </div>
      {isOpened && (
        <div className="flex items-center border-solid border-second_grey/20 border-t-[1px] mt-8">
          <p className={`text-second_grey font-semibold w-9/12 mt-6 ${smTextDesktop}`}>
            {event.description}
          </p>
          <PillButton classes={`bg-blue text-white ml-auto mt-6 ${smTextDesktop}`}>
            <NewTabLink url={event.registrationLink}>Зарегистрироваться</NewTabLink>
          </PillButton>
        </div>
      )}
    </RoundCard>
  );
}
