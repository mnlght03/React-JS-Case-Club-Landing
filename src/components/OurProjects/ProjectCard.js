import React from 'react';
import ProjectCase from './ProjectCase';
import { textDesktop } from '../../utils';

export default function ProjectCard({ title, cases, icon, classes, ...props }) {
  return (
    <div className={'rounded-3xl p-12 bg-light_black ' + classes}>
      <div className="flex justify-between">
        <h2 className={`text-white font-semibold w-7/12 ${textDesktop}`}>{title}</h2>
        {icon}
      </div>
      {cases.map((item, i) => (
        <ProjectCase
          key={item.id ?? i}
          caseKey={`0${i + 1}`}
          title={item.title}
          date={item.date}
          coverage={item.coverage}
          participants={item.participants}
          border
          classes={i === 0 ? 'mt-12' : ''}
        />
      ))}
    </div>
  );
}
