import React from 'react';
import Section from '../ui/Section';
import { bigTextDesktop, bigTextMobile } from '../../utils';
import DoublePillButton from '../ui/DoublePillButton';
import ProjectCard from './ProjectCard';
import AlfaBankPng from '../../assets/img/logos/AlfaBank.png';
import BeelinePng from '../../assets/img/logos/Beeline.png';
import ProjectCardIcon from './ProjectCardIcon';
import PillButton from '../ui/PillButton';

export default function OurProjects() {
    const alphaIcon = <ProjectCardIcon imgSrc={AlfaBankPng} classes='bg-white ml-4'/>;
    const beelineIcon = <ProjectCardIcon imgSrc={BeelinePng} classes='bg-white ml-4'/>;

    const projects = [
        {
            title: 'Курс по Product Owner-тематике и кейс-чемпионат совместно с Билайн',
            cases: [
                {
                    title: 'Анонс кейса-чемпионата и курса, продвижение мероприятий',
                    date: 'Август-сентябрь 2022',
                    coverage: null,
                    participants: null,
                },
                {
                    title: 'Сибирский кейс-чемпионат',
                    date: 'Сентябрь 2022',
                    coverage: 1500,
                    participants: 250,
                },
                {
                    title: 'Двухмесячный online курс по управлению продуктом',
                    date: 'Ноябрь-декабрь 2022',
                    coverage: 3000,
                    participants: 200,
                },
            ],
            icon: beelineIcon,
        },
        {
            title: 'Case Hub. Самый масштабный кейс-чемпионат для студентов со всей Сибири',
            cases: [
                {
                    title: 'Курс лекций по решению кейсов',
                    date: '1-7 июля 2022',
                    coverage: null,
                    participants: 120,
                },
                {
                    title: 'Кейс-чемпионат',
                    date: 'Июль 2022',
                    coverage: 1500,
                    participants: 250,
                },
            ],
            icon: beelineIcon,
        },
        {
            title: 'Хакатон для студентов по разработке приложения для Альфа Банк',
            cases: [
                {
                    title: 'Хакатон по мобильной разработке',
                    date: 'Осень 2022',
                    coverage: 1000,
                    participants: 120,
                },
            ],
            icon: alphaIcon,
        },
    ];

    return (
        <Section
            rounded
            topRoundMargin
            roundFill="bg-blue"
            bgColor="bg-black"
        >
            <div className="flex justify-between flex-wrap">
                <h1
                    className={`text-white ${bigTextMobile} ${bigTextDesktop} text-center xl:inline`}
                >
                    Реализованные проекты
                </h1>
                <DoublePillButton
                    firstChildren={'2022-2023 год'}
                    secondChildren={'Другие проекты'}
                    classes="mt-4 xl:mt-0"
                    // disabled
                />
            </div>
            {projects.map((project) => (
                <ProjectCard
                    title={project.title}
                    cases={project.cases}
                    icon={project.icon}
                    classes='mt-16'
                />
            ))}

            <div className='flex w-full justify-center'>
                <PillButton classes='bg-white text-black font-semibold mt-8'>Показать ещё</PillButton>
            </div>
        </Section>
    );
}
