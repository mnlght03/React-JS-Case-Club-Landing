import React from 'react';
import RoundCard from "../ui/RoundCard";
import PartnerIconMobile from "./PartnerIconMobile";

function PartnerCardMobile({ partner, classes = '' }) {
    return (
        <RoundCard
            classes={
                'min-w-[300px] max-w-[300px] min-h-[160px] bg-light_black' +
                classes
            }
        >
            <PartnerIconMobile iconSrc={partner.logoSrc} iconAlt='logo' />
            <h3 className='mt-4 text-white text-xl font-semibold'>{partner.participants} участников</h3>
            <p className="mt-4 text-white">{partner.description}</p>
        </RoundCard>
    );
}

export default PartnerCardMobile;