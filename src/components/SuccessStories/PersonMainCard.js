import React from 'react';
import ImageCard from '../ui/ImageCard';
import { mediumTextMobile, smTextDesktop, smTextMobile, textDesktop } from '../../utils';
import Button from '../ui/Button';

export default function PersonMainCard({ person }) {
    return (
        <div className="w-full xl:w-8/12 flex flex-col xl:flex-row gap-6">
            <ImageCard classes="min-w-[260px] h-[300px] xl:h-[380px]" />
            <div>
                <p className={`font-semibold mt-4 ${mediumTextMobile} ${textDesktop}`}>
                    {person.name}
                </p>
                <div className="mt-4 mb-6">
                    {person.attributes.map((attribute, i) => (
                        <Button
                            key={i}
                            classes={`text-center w-[160px] xl:w-[210px] font-semibold ${smTextMobile} ${smTextDesktop} ${
                                i % 2 === 0 ? 'bg-blue text-white' : 'bg-blue/40 text-blue'
                            } ${
                                i % 2 === 1 ? 'ml-2' : ''
                            } ${
                                i > 1  ? 'mt-2' : ''
                            }`}
                        >
                            {attribute}
                        </Button>
                    ))}
                </div>
                {person.description.split('\n').map((text, i) => (
                    <p key={i} className="mt-4 font-semibold">{text}</p>
                ))}
            </div>
        </div>
    );
}
