import React, { useState } from "react";
import Section from "../ui/Section";
import { bigTextDesktop } from "../../utils";
import ScrollCounter from "../ui/ScrollCounter";
import EventsGalleryListDesktop from "./EventsGalleryListDesktop";
import EventsGalleryPhotosDesktop from "./EventsGalleryPhotosDesktop";

export default function EventsGalleryDesktop() {
    const [currentPage, setCurrentPage] = useState(1);
    const [currentPhotoCount, setCurrentPhotoCount] = useState(4);

    const PHOTOS_PER_PAGE = 4;
    const TOTAL_PHOTOS = 114;

    const setPage = (i) => {
        let page = Math.floor(i / PHOTOS_PER_PAGE);
        page = page < 0 ? page : PHOTOS_PER_PAGE;
        console.log(i, page);
        setCurrentPage(page);
        setCurrentPhotoCount((PHOTOS_PER_PAGE * page > TOTAL_PHOTOS ? TOTAL_PHOTOS : PHOTOS_PER_PAGE * page));
    }

    const events = [
        'Case Club x Lab Industries',
        'Case Club x TELE2',
        'Case Club x Beeline',
        'Case Club x Экспобанк',
        'Open Space Picnic',
        'Хакатон Альфа-Банк',
    ];

    const [chosenEvent, setChosenEvent] = useState(0);

    return (
        <Section bgColor="bg-beige">
            <div className="flex items-center mt-16">
                <h1 className={`font-semibold ${bigTextDesktop}`}>Мероприятия</h1>
                <ScrollCounter classes='ml-auto' current={currentPage} setCurrent={setCurrentPage} total={TOTAL_PHOTOS} />
            </div>
            <div className="flex gap-4 justify-between mt-12">
                <EventsGalleryListDesktop events={events} chosen={chosenEvent} setChosen={setChosenEvent} />
                <EventsGalleryPhotosDesktop />
            </div>
        </Section>
    );
}
