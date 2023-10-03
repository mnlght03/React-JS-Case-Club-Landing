import React from 'react';
import Button from '../ui/Button';
import { xsTextDesktop } from '../../utils';
import useTagColors from '../../hooks/useTagColors';

export default function EventCardButtons({ keywords, style = 'BLUE', classes = '' }) {
  const color = useTagColors(style);

  return (
    <div className={`flex gap-4 ${classes}`}>
      {keywords.map((word, i) => (
        <Button
          key={i}
          classes={`font-semibold ${xsTextDesktop} ${color[i % 2]}`}
          disabled
        >
          {word}
        </Button>
      ))}
    </div>
  );
}
