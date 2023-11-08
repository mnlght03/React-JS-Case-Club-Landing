import React from 'react';
import PartnerCardDesktop from './PartnerCardDesktop';

export default function PartnersSlider({ partners, classes = '' }) {
  return (
    <div className={`flex gap-4 h-max ${classes}`}>
      {partners.map((partner, i) => (
        <PartnerCardDesktop
          key={partner.id ?? i}
          partner={partner}
        />
      ))}
    </div>
  );
}
