import React, {useContext, useEffect, useState} from 'react';
import Section from '../ui/Section';
import {
    mediumTextMobile,
} from '../../utils';
import DoublePillButton from '../ui/DoublePillButton';
import ProjectCard from './ProjectCard';
import ProjectCardIcon from './ProjectCardIcon';
import PillButton from '../ui/PillButton';
import ProjectService from '../../services/ProjectService';
import {GlobalContext} from "../../context";

export default function OurProjects() {
    const {windowWidth} = useContext(GlobalContext);

    const [projects, setProjects] = useState([]);
    const fetchProjects = async () => {
        const data = await ProjectService.getAll();
        setProjects(data);
    };
    useEffect(() => {
        fetchProjects();
    }, []);

    return (
        <Section
            rounded
            topRoundMargin
            roundFill="bg-blue"
            bgColor="bg-black"
        >
            <div className="flex gap-4 items-center justify-center 2xl:justify-between flex-wrap">
                <h1
                    className={`text-white ${mediumTextMobile} lg:text-5xl text-center`}
                >
                    Реализованные проекты
                </h1>
                <DoublePillButton
                    firstChild={<span className={`text-sm xl:text-base`}>2022-2023 год</span>}
                    secondChild={<span className={`text-sm xl:text-base`}>Другие проекты</span>}
                    smallPadding={windowWidth < 1100}
                />
            </div>
            {projects.length > 0 &&
                projects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        cases={project.cases}
                        iconSrc={project.logoUrl}
                        date={project.date}
                        classes="mt-8 lg:mt-16"
                    />
                ))}

            <div className="flex w-full justify-center">
                <PillButton classes="bg-white text-black font-semibold mt-8">
                    Показать ещё
                </PillButton>
            </div>
        </Section>
    );
}
