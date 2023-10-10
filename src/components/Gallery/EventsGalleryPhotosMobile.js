import React, {useMemo} from 'react';
import EventsGalleryPhotos from "./EventsGalleryPhotos";

function EventsGalleryPhotosMobile({photos}) {
    const slices = useMemo(() =>
            [...Array(Math.ceil(photos.length / 4))]
                .map((_, i) => photos.slice(i * 4, (i + 1) * 4))
        , [photos]);

    return (
        <>
            {slices.map((slice, i) => (
                <EventsGalleryPhotos
                    classes={'overflow-visible w-fit'}
                    photos={slice}
                    key={i}
                />
            ))}
        </>
    );
}

export default EventsGalleryPhotosMobile;