import React from 'react';
import AboutSlider from './AboutSlider';
import AboutPills from './AboutPills';
import Section from '../ui/Section';

import '../../assets/styles/about.css';

export default function About() {
    const aboutPillsItems = [
        ['Маркетинг', 'Публичные выступления', 'Исследования', 'Бизнес', 'Тайм-менеджмент', 'Организация мероприятий'],
        ['Переговоры', 'Дизайн', 'Аналитика', 'Работа в команде', 'Экономика', 'Управление проектами'],
    ]

    return (
        <>
            <div className={'bg-black flex justify-center relative'}>
                <Section id="about" bgColor='bg-blue' rounded topRoundMargin>
                    <AboutSlider className={'mb-40'} />
                    <div className="pills-slide absolute left-0 bottom-24 flex gap-4">
                        <AboutPills items={aboutPillsItems[0]} classes={'pills-first'} />
                        <AboutPills items={aboutPillsItems[0]} classes={'pills-first'} />
                    </div>
                    <div className="pills-slide absolute left-0 bottom-8 flex gap-4">
                        <AboutPills items={aboutPillsItems[1]} classes='pills-second' />
                        <AboutPills items={aboutPillsItems[1]} classes='pills-second' />
                    </div>
                </Section>
            </div>
        </>
    );
}
