import React from 'react';
import ImageCircle from '../ui/ImageCircle';
import Slider from "../ui/Slider";

export default function PersonsListMobile({ persons, active, setActive }) {
  return (
    <Slider
      classes="flex w-fit gap-4"
    >
      {persons.map((person, i) => (
        <ImageCircle
          imgSrc={person.profilePhotoUrl}
          key={person.id ?? i}
          classes={`w-[60px] h-[60px]`}
          opacity={i === active ? '100%' : '20%'}
          onClick={() => setActive(i)}
        />
      ))}
    </Slider>
  );
}
