import React, { useEffect, useState } from 'react';
import Section from '../ui/Section';
import { bigTextDesktop, bigTextMobile } from '../../utils';
import DoublePillButton from '../ui/DoublePillButton';
import ProjectCard from './ProjectCard';
import ProjectCardIcon from './ProjectCardIcon';
import PillButton from '../ui/PillButton';
import ProjectService from '../../services/ProjectService';

export default function OurProjects() {
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
          disabled
        />
      </div>
      {projects.length > 0 &&
        projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            cases={project.cases}
            icon={
              <ProjectCardIcon
                imgSrc={project.logoUrl}
                classes="bg-white ml-4"
              />
            }
            classes="mt-16"
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
