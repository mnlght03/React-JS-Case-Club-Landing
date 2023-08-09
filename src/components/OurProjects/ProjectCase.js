import React, { useContext } from 'react';
import { GlobalContext } from '../../context';
import ProjectCaseDesktop from './ProjectCaseDesktop';
import ProjectCaseMobile from './ProjectCaseMobile';

export default function ProjectCase({
    caseKey,
    title,
    date,
    coverage,
    participants,
    border = false,
    classes = ''
}) {
    const { isDesktop } = useContext(GlobalContext);
    return isDesktop ? (
        <ProjectCaseDesktop
            title={title}
            date={date}
            caseKey={caseKey}
            coverage={coverage}
            participants={participants}
            border={border}
            classes={classes}
        />
    ) : (
        <ProjectCaseMobile
            
        />
    );
}
