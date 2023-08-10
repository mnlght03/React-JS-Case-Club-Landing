import React, { useState } from 'react';
import RoundCard from '../ui/RoundCard';
import PillButton from '../ui/PillButton';

export default function PartnerCardDesktop({ partner, classes = '' }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <RoundCard
            classes={
                'flex items-center justify-center min-w-[280px] h-[160px] bg-white hover:bg-black hover:border-white/60 hover:cursor-pointer hover:border-solid hover:border-2 ' +
                classes
            }
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {!isHovered && (
                <img
                    className="w-[210px] h-[70px]"
                    src={partner.logoSrc}
                    alt="logo"
                />
            )}
            {isHovered && (
                <div className='flex flex-col items-center'>
                    <p className="text-white text-center w-full">{partner.description}</p>
                    <PillButton smallPadding classes="text-black font-semibold bg-white mt-4">
                        {partner.participants} участников
                    </PillButton>
                </div>
            )}
        </RoundCard>
    );
}
