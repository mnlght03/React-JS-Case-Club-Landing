import {useEffect} from "react";

export function useScrollToSections(
    aboutRef,
    casesRef,
    currentProjectsRef,
    contactRef
) {
    const scrollToSection = () => {
        console.log(aboutRef)
        switch(window.location.hash) {
            case '#about':
                aboutRef.current.scrollIntoView();
                break;
            case '#cases':
                casesRef.current.scrollIntoView();
                break;
            case '#current-projects':
                currentProjectsRef.current.scrollIntoView();
                break;
            case '#contact':
                contactRef.current.scrollIntoView();
                break;
        }
    }

    useEffect(() => scrollToSection(), [window.location.hash]);
}