import React from 'react';

function PartnerIconMobile({
   iconSrc,
   iconAlt = '',
   classes = ''
}) {
    return (
        <div
            className={
                `flex align-center rounded-lg items-center px-4 py-2 w-[130px] h-[50px] 
                ${classes ? classes : 'bg-white'}`
            }
        >
            <img
                src={iconSrc}
                alt={iconAlt}
            />
        </div>
    );
}
export default PartnerIconMobile;