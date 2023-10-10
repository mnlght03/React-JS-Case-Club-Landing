import React from 'react';
import ImageCard from '../ui/ImageCard';
import {mediumTextMobile, smTextDesktop, smTextMobile, textDesktop} from '../../utils';
import Button from '../ui/Button';
import useTagColors from '../../hooks/useTagColors';

export default function PersonMainCard({person}) {
    const tagColors = useTagColors(person.tagColor);
    return (
        <div className="w-full items-center lg:w-8/12 flex flex-col lg:flex-row gap-6">
            <ImageCard
                imgSrc={person.fullSizePhotoUrl}
                classes="w-[300px] h-[300px] lg:min-w-[250px] lg:h-[380px]"
            />
            <div>
                <h1
                    className={`font-semibold text-center lg:text-start mt-4 ${mediumTextMobile} ${textDesktop}`}
                >
                    {person.name}
                </h1>
                <div className="mt-4 mb-6 flex justify-around">
                    <Button
                        classes=
                            {`text-center w-[160px] lg:w-[210px] font-semibold ${smTextMobile} ${smTextDesktop} ${tagColors[0]}`}
                    >
                        {person.firstTag}
                    </Button>
                    <Button
                        classes=
                            {`ml-2 text-center w-[160px] lg:w-[210px] font-semibold ${smTextMobile} ${smTextDesktop} ${tagColors[1]}`}
                    >
                        {person.secondTag}
                    </Button>
                </div>
                {person.description.split('\n').map((text, i) => (
                    <p
                        key={i}
                        className="mt-4 font-semibold"
                    >
                        {text}
                    </p>
                ))}
            </div>
        </div>
    );
}
