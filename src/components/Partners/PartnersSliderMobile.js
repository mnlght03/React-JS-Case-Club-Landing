import React from 'react';
import PartnerCardMobile from "./PartnerCardMobile";
import Slider from "../ui/Slider";

function PartnersSliderMobile({partners, classes = ''}) {
    return (
        <Slider
            classes={`flex gap-4 h-max max-w-[2400px] ${classes}`}
        >
            {partners.map((partner, i) => (
                <PartnerCardMobile
                    key={partner.id ?? i}
                    partner={partner}
                />
            ))}
        </Slider>
    );
}

export default PartnersSliderMobile;
