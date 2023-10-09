import React from 'react';
import ProjectCaseMobile from "./ProjectCaseMobile";
import ProjectCardIconMobile from "./ProjectCardIconMobile";

function ProjectCardMobile({ title, cases, iconSrc, classes }) {
    return (
        <div className={'rounded-3xl p-6 bg-light_black ' + classes}>
            <div className="flex flex-col ">
                <ProjectCardIconMobile iconSrc={iconSrc} />
                <h2 className={`text-white font-semibold text-lg mt-4`}>{title}</h2>
            </div>
            {cases.map((item, i) => (
                <ProjectCaseMobile
                    key={item.id ?? i}
                    caseKey={(i + 1).toString().padStart(2, '0')}
                    title={item.title}
                    date={item.date}
                    coverage={item.coverage}
                    participants={item.participants}
                    border
                    classes={i === 0 ? 'mt-6' : ''}
                />
            ))}
        </div>
    );
}

export default ProjectCardMobile;