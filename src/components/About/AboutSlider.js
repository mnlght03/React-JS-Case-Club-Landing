import React, { useContext, useState } from 'react';
import ChatMessage from '../ui/ChatMessage';
import {
    bigTextMobile,
    headingTextDesktop,
    mediumTextDesktop,
    mediumTextMobile,
} from '../../utils';
import { GlobalContext } from '../../context';
import AboutSliderCounter from './AboutSliderCounter';
import AboutSliderOptions from './AboutSliderOptions';

export default function AboutSlider({...props}) {
    const { isDesktop } = useContext(GlobalContext);

    const [current, setCurrent] = useState(0);

    const options = ['кейс-чемпионаты', 'образовательные курсы', 'мощный старт карьеры', 'лекции от экспертов'];

    return (
        <div {...props}>
            <h1 className={`text-white  ${bigTextMobile} ${headingTextDesktop}`}>
                Case Club - это
            </h1>
            <ChatMessage classes={`bg-white rounded-tl-none ${bigTextMobile} ${headingTextDesktop} font-semibold mt-4`}>{options[current]}</ChatMessage>
            <div className='mt-4 xl:mt-16 flex'>
                <div>
                    <p className={`text-white ${mediumTextMobile} ${mediumTextDesktop} w-fit`}>Проводим кейс-чемпионаты</p>
                    <p className={`text-white ${mediumTextMobile} ${mediumTextDesktop} w-fit xl:mt-4`}>с крупнейшими компаниями</p>
                    <AboutSliderCounter classes='mt-4 xl:mt-20 w-fit' current={current} setCurrent={setCurrent} total={options.length} />
                </div>
                {isDesktop && <AboutSliderOptions classes='w-max ml-auto' options={options} current={current} setOption={setCurrent}/> }
            </div>
        </div>
    );
}
