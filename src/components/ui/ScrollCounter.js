import React from 'react';
import ArrowButton from './ArrowButton';
import { mediumTextDesktop, smTextDesktop, smTextMobile, smallTextDesktop, textDesktop } from '../../utils';

export default function ScrollCounter({ classes = '', current, setCurrent, total }) {
    return (
        <div className={`inline-flex items-center gap-2 ${classes}`}>
            <ArrowButton
                border
                direction="left"
                disabled={current === 1}
                classes='mr-2'
                onClick={() => setCurrent(current - 1)}
            />
            <span className={`text-black font-semibold text-2xl`}>{current}</span>
            <span className={`text-second_grey font-semibold ${smTextMobile} ${smTextDesktop}`}>из {total}</span>
            <ArrowButton
                border
                direction="right"
                disabled={current === total}
                classes='ml-2'
                onClick={() => setCurrent(current + 1)}
            />
        </div>
    );
}
