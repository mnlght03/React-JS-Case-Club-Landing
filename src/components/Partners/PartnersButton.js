import React from 'react';
import PillButton from '../ui/PillButton';

export default function PartnersButton({
   color = 'black',
   smallPadding = false,
   classes = ''
}) {
    let styles = '';

    switch (color) {
        case 'black':
            styles = 'text-black bg-white';
            break;
        case 'blue':
            styles = 'text-white bg-blue';
            break;
        default:
            styles = 'text-black bg-white';
            break;
    }

    return (
        <a href="#contact-us">
            <PillButton smallPadding={smallPadding}
                        classes={`${styles} font-semibold ${classes}`}>
                Стать партнёром
            </PillButton>
        </a>
    );
}
