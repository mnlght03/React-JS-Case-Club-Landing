import React from 'react';
import RoundCard from '../ui/RoundCard';
import ImageCircle from '../ui/ImageCircle';
import { smTextDesktop } from '../../utils';

export default function PersonsListDesktop({ persons, active, setActive }) {
  return (
    <div
      dir="rtl"
      className="persons-list flex w-4/12 max-h-[380px] overflow-y-scroll flex-col gap-0"
    >
      {persons.map((person, i) => (
        <RoundCard
          dir="ltr"
          smallPadding
          classes={`flex items-center gap-4 cursor-pointer p-4 ${
            i === active ? 'bg-light_second_grey' : 'bg-beige'
          }`}
          key={person.id ?? i}
          onClick={() => setActive(i)}
        >
          <ImageCircle
            imgSrc={person.profilePhotoUrl}
            classes="w-[60px] h-[60px]"
          />
          <div>
            <p className="font-semibold">{person.name}</p>
            <p className={`text-light_grey font-semibold ${smTextDesktop}`}>
              {person.role}
            </p>
          </div>
        </RoundCard>
      ))}
    </div>
  );
}
