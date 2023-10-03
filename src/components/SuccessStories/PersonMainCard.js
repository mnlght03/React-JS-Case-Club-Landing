import React from 'react';
import ImageCard from '../ui/ImageCard';
import { mediumTextMobile, smTextDesktop, smTextMobile, textDesktop } from '../../utils';
import Button from '../ui/Button';
import useTagColors from '../../hooks/useTagColors';

export default function PersonMainCard({ person }) {
  const tagColors = useTagColors(person.tagColor);
  console.log(tagColors);
  return (
    <div className="w-full xl:w-8/12 flex flex-col xl:flex-row gap-6">
      <ImageCard
        imgSrc={person.fullSizePhotoUrl}
        classes="min-w-[260px] h-[300px] xl:h-[380px]"
      />
      <div>
        <p className={`font-semibold mt-4 ${mediumTextMobile} ${textDesktop}`}>
          {person.name}
        </p>
        <div className="mt-4 mb-6">
          <Button
            classes={`text-center w-[160px] xl:w-[210px] font-semibold ${smTextMobile} ${smTextDesktop} ${tagColors[0]}`}
          >
            {person.firstTag}
          </Button>
          <Button
            classes={`text-center w-[160px] xl:w-[210px] font-semibold ${smTextMobile} ${smTextDesktop} ${tagColors[1]} ml-2`}
          >
            {person.secondTag}
          </Button>
        </div>
        {person.description.split('\n').map((text, i) => (
          <p
            key={i}
            className="mt-4 font-semibold"
          >
            {text}
          </p>
        ))}
      </div>
    </div>
  );
}
