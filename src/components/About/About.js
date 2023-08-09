import React from 'react';
import AboutSlider from './AboutSlider';
import AboutPills from './AboutPills';
import Section from '../../ui/Section';

export default function About() {
    const aboutPillsItems = [
        ['Маркетинг', 'Публичные выступления', 'Исследования', 'Бизнес', 'Тайм-менеджмент', 'Организация мероприятий'],
        ['Переговоры', 'Дизайн', 'Аналитика', 'Работа в команде', 'Экономика', 'Управление проектами'],
    ]

    return (
        <Section bgColor='bg-blue' rounded topRoundMargin classes='bg-blue overflow-visible'>
            <AboutSlider />
            <AboutPills items={aboutPillsItems[0]} classes='mt-12 xl:mt-24' />
            <AboutPills items={aboutPillsItems[1]} classes='mt-4' />
        </Section>
    );
}
