import React from 'react';
import {textDesktop} from "../../utils";
import ProjectCaseDesktop from "./ProjectCaseDesktop";
import ProjectCardIcon from "./ProjectCardIcon";

function ProjectCardDesktop({ title, cases, iconSrc, classes }) {
    return (
        <div className={'rounded-3xl p-12 bg-light_black ' + classes}>
          <div className="flex justify-between ">
            <h2 className={`text-white font-semibold w-7/12 ${textDesktop}`}>{title}</h2>
            <ProjectCardIcon iconSrc={iconSrc} />
          </div>
          {cases.map((item, i) => (
            <ProjectCaseDesktop
              key={item.id ?? i}
              caseKey={(i + 1).toString().padStart(2, '0')}
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

export default ProjectCardDesktop;