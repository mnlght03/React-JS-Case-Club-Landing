import React, { useContext } from "react";
import { GlobalContext } from "../../context";
import EventsGalleryDesktop from "./EventsGalleryDesktop";
import EventsGalleryMobile from "./EventsGalleryMobile";

export default function Events() {
    const {isDesktop} = useContext(GlobalContext);

    return isDesktop ? <EventsGalleryDesktop /> : <EventsGalleryMobile />;
}
