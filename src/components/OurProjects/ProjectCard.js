import React, {useContext} from 'react';
import {GlobalContext} from "../../context";
import ProjectCardDesktop from "./ProjectCardDesktop";
import ProjectCardMobile from "./ProjectCardMobile";

export default function ProjectCard({title, cases, iconSrc, classes}) {
    const {isDesktop} = useContext(GlobalContext);

    return (
        <>
            {isDesktop
                ? <ProjectCardDesktop
                    title={title}
                    cases={cases}
                    iconSrc={iconSrc}
                    classes={classes}
                />
                : <ProjectCardMobile
                    title={title}
                    cases={cases}
                    iconSrc={iconSrc}
                    classes={classes}
                />
            }
        </>

    );
}
