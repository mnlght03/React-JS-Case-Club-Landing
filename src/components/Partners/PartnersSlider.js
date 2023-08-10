import React from 'react';
import PartnerCardDesktop from './PartnerCardDesktop';

export default function PartnersSlider({ partners, classes = '' }) {
    return (
        <div className={`flex justify-center gap-4 h-max max-w-[2400px] ${classes}`}>
            {partners.map((partner) => (
                <PartnerCardDesktop partner={partner}/>
            ))}
        </div>
    );
}
