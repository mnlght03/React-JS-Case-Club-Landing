import React from 'react';
import ImageCard from '../ui/ImageCard';

export default function EventsGalleryPhotos({ classes = '', photos }) {
  return (
    <div className={classes}>
      <div className="flex gap-2 lg:gap-4">
        {photos[0] && (
          <ImageCard
            imgSrc={photos[0]}
            classes="w-[180px] h-[180px] lg:w-[260px] lg:h-[260px]"
          />
        )}
        {photos[1] && (
          <ImageCard
            imgSrc={photos[1]}
            classes="w-[290px] h-[180px] lg:w-[420px] lg:h-[260px]"
          />
        )}
      </div>
      <div className="flex gap-2 lg:gap-4 mt-2 lg:mt-4">
        {photos[2] && (
          <ImageCard
            imgSrc={photos[2]}
            classes="w-[290px] h-[180px] lg:w-[420px] lg:h-[260px]"
          />
        )}
        {photos[3] && (
          <ImageCard
            imgSrc={photos[3]}
            classes="w-[180px] h-[180px] lg:w-[260px] lg:h-[260px]"
          />
        )}
      </div>
    </div>
  );
}
