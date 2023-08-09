import React from 'react';
import PartnerCardDesktop from './PartnerCardDesktop';

export default function PartnersSlider({ partners, classes = '' }) {
    return (
        <div className={'w-100vw max-w-[2400px] ' + classes}>
            <div className='flex gap-4 w-full'>
                {partners.map((partner) => (
                    <PartnerCardDesktop partner={partner}/>
                ))}
            </div>
            <div className='flex gap-4 mt-4 w-full'>
                {partners.map((partner) => (
                    <PartnerCardDesktop partner={partner}/>
                ))}
            </div>
        </div>
    );
}
