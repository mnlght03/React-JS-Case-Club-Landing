import React from 'react';
import RoundCard from './RoundCard';

export default function ImageCard({
  classes = '',
  imgSrc = undefined,
  imgAlt = '',
  children = null,
}) {
  return (
    <RoundCard
      classes={classes}
      style={{
        background: imgSrc ? `no-repeat center/cover url(${imgSrc})` : '#828CA3',
      }}
    >
      {children}
    </RoundCard>
  );
}
