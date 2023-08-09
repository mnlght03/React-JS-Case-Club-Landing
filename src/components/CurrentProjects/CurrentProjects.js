import React, { useEffect, useState } from 'react';
import Section from '../ui/Section';
import { bigTextDesktop, bigTextMobile } from '../../utils';
import ChatMessage from '../ui/ChatMessage';
import CurrentProjectsService from './CurrentProjectsService';
import ButtonsLine from './ButtonsLine';
import ProjectDescription from './ProjectDescription';

export default function CurrentProjects() {
    const [projects, setProjects] = useState([]);

    const [chosen, setChosen] = useState(0);

    const fetchProjects = async () => {
        const projects = await CurrentProjectsService.getAllCurrentProjects();
        setProjects(projects);
    };

    useEffect(() => {
        fetchProjects();
    }, []);

    return (
        <Section
            rounded
            topRoundMargin
            bgColor="bg-beige"
        >
            <h1 className={`text-black font-semibold text-center ${bigTextMobile} ${bigTextDesktop}`}>
                Текущие
                <ChatMessage classes="ml-6 text-white bg-blue rounded-br-none">
                    проекты
                </ChatMessage>
            </h1>
           <ButtonsLine projects={projects} chosen={chosen} setChosen={setChosen} />
           {projects.length > 0 && <ProjectDescription project={projects[chosen]} />}
        </Section>
    );
}
