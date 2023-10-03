import React from 'react';
import ImageCard from '../ui/ImageCard';

export default function EventsGalleryPhotosDesktop({ classes = '', photos }) {
  return (
    <div className={classes}>
      <div className="flex gap-4">
        {photos[0] && (
          <ImageCard
            imgSrc={photos[0]}
            classes="w-[260px] h-[260px]"
          />
        )}
        {photos[1] && (
          <ImageCard
            imgSrc={photos[1]}
            classes="w-[420px] h-[260px]"
          />
        )}
      </div>
      <div className="flex gap-4 mt-4">
        {photos[2] && (
          <ImageCard
            imgSrc={photos[2]}
            classes="w-[420px] h-[260px]"
          />
        )}
        {photos[3] && (
          <ImageCard
            imgSrc={photos[3]}
            classes="w-[260px] h-[260px]"
          />
        )}
      </div>
    </div>
  );
}
