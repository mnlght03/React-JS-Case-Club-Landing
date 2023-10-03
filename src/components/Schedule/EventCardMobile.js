import React, { useState } from 'react';
import RoundCard from '../ui/RoundCard';
import { smTextDesktop, smTextMobile, smallTextDesktop } from '../../utils';
import PlusButton from '../ui/PlusButton';
import PillButton from '../ui/PillButton';
import NewTabLink from '../ui/NewTabLink';

export default function EventCardMobile({ event, classes = '' }) {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <RoundCard classes={'w-full bg-white ' + classes}>
      <span className={`w-5/12 text-blue ${smallTextDesktop}`}>{event.date}</span>
      <div className="flex items-center mt-2">
        <p className={`font-semibold w-3/4 ${smallTextDesktop}`}>{event.name}</p>
        <PlusButton
          border
          classes="ml-auto"
          onClick={() => setIsOpened(!isOpened)}
        />
      </div>
      {isOpened && (
        <div
          className={`border-solid border-second_grey/20 border-t-[1px] mt-6 ${smTextMobile}`}
        >
          <p className={`text-second_grey  w-full mt-6 ${smTextDesktop}`}>
            {event.description}
          </p>
          <PillButton classes={`bg-blue text-white mt-6 w-full ${smTextDesktop}`}>
            <NewTabLink url={event.registrationLink}>Зарегистрироваться</NewTabLink>
          </PillButton>
        </div>
      )}
    </RoundCard>
  );
}
