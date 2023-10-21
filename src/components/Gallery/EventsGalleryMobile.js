import React, {useState} from "react";
import Button from "../ui/Button";
import Popup from "../ui/Popup";
import MobileEventSelect from "./MobileEventSelect";
import Slider from "../ui/Slider";
import EventsGalleryPhotosMobile from "./EventsGalleryPhotosMobile";

export default function EventsGalleryMobile({events}) {
    const MAX_PHOTO_COUNT = 32;

    const [chosenEvent, setChosenEvent] = useState(events[0]);

    const [isOpened, setIsOpened] = useState(false);

    return (
        <>
            <h1 className={`mt-8 font-semibold text-center w-full text-3xl`}>Мероприятия</h1>
            <Button
                classes={
                    'py-5 px-8 bg-grey_blue mt-8 w-full rounded-3xl font-semibold'
                }
                onClick={() => setIsOpened(!isOpened)}
            >
                {chosenEvent.name}
            </Button>
            <Slider classes={'flex gap-4 mt-6'} minOffset={0}
                    maxOffset={478 * (Math.floor(chosenEvent.photos.length / 4) - 1) + 200}>
                <EventsGalleryPhotosMobile
                    photos={chosenEvent.photos.slice(0, MAX_PHOTO_COUNT)}
                />
            </Slider>
            {isOpened && (
                <Popup topRoundMargin bgColor={'bg-light_second_grey'}
                       closeFn={() => setIsOpened(false)}>
                    <h1 className={'w-full font-semibold text-lg mb-4 px-4'}>
                        Выберите мероприятие
                    </h1>
                    <MobileEventSelect
                        events={events}
                        chosen={chosenEvent}
                        setChosen={(event) => setChosenEvent(event) || setIsOpened(false)}
                    />
                </Popup>
            )}
        </>
    );
}
