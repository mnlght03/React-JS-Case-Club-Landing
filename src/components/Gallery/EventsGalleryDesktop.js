import React, { useEffect, useMemo, useState } from 'react';
import EventsGalleryListDesktop from './EventsGalleryListDesktop';
import EventsGalleryPhotos from './EventsGalleryPhotos';
import Section from '../ui/Section';
import ScrollCounter from '../ui/ScrollCounter';
import { bigTextDesktop } from '../../utils';

export default function EventsGalleryDesktop({ events }) {
  const PHOTOS_PER_PAGE = 4;

  const [chosenEvent, setChosenEvent] = useState(events[0]);

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => setCurrentPage(1), [chosenEvent]);

  const setPage = (i) => {
    if (i < 0) setCurrentPage(1);
    else if (i > chosenEvent.photos.length / PHOTOS_PER_PAGE)
      setCurrentPage(chosenEvent.photos.length / PHOTOS_PER_PAGE);
    else setCurrentPage(i);
  };

  const pagePhotos = useMemo(
    () =>
      chosenEvent.photos.slice(
        (currentPage - 1) * PHOTOS_PER_PAGE,
        currentPage * PHOTOS_PER_PAGE
      ),
    [currentPage, chosenEvent]
  );

  return (
    <Section bgColor="bg-beige">
      <div className="flex items-center mt-16">
        <h1 className={`font-semibold ${bigTextDesktop}`}>Мероприятия</h1>
        <ScrollCounter
          classes="ml-auto"
          current={currentPage}
          setCurrent={setPage}
          total={chosenEvent.photos.length / PHOTOS_PER_PAGE}
        />
      </div>
      <div className="flex gap-4 justify-between mt-12">
        <EventsGalleryListDesktop
          events={events}
          chosenId={chosenEvent.id ?? 0}
          setChosen={setChosenEvent}
        />
        <EventsGalleryPhotos photos={pagePhotos} />
      </div>
    </Section>
  );
}
