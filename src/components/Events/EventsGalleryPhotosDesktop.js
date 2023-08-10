import React from "react";
import ImageCard from "../ui/ImageCard";

export default function EventsGalleryPhotosDesktop({classes = ''}) {
    return (
        <div className={classes} >
            <div className="flex gap-4">
                <ImageCard classes='w-[260px] h-[260px]' />
                <ImageCard classes='w-[420px] h-[260px]' />
            </div>
            <div className="flex gap-4 mt-4">
                <ImageCard classes='w-[420px] h-[260px]' />
                <ImageCard classes='w-[260px] h-[260px]' />
            </div>
        </div>
    );
}
