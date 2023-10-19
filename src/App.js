import {useEffect, useRef, useState} from 'react';
import Header from './components/Header/Header';
import {GlobalContext} from './context';
import {isDesktopPredicate} from './utils';
import Hero from './components/Hero';
import ChronoLine from './components/ui/ChronoLine';
import About from './components/About';
import OurProjects from './components/OurProjects';
import Partners from './components/Partners';
import CurrentProjects from './components/CurrentProjects';
import EventsSchedule from './components/Schedule';
import SuccessStories from './components/SuccessStories';
import OurTeam from './components/OurTeam';
import Gallery from './components/Gallery/Events';
import Faq from './components/FAQ';
import Footer from './components/Footer';
import ContactUs from './components/ContactUs';
import {useScrollToSections} from "./hooks/useScrollToSections";

function App() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [isDesktop, setIsDesktop] = useState(isDesktopPredicate());
    const updateDesktopState = () => {
        setWindowWidth(window.innerWidth)
        setIsDesktop(isDesktopPredicate());
    }

    useEffect(() => {
        window.addEventListener('resize', updateDesktopState);
        return () => window.removeEventListener('resize', updateDesktopState);
    });

    const aboutRef = useRef(null);
    const casesRef = useRef(null);
    const currentProjectsRef = useRef(null);
    const contactRef = useRef(null);

    // useScrollToSections(aboutRef, casesRef, currentProjectsRef, contactRef);

    return (
        <GlobalContext.Provider
            value={{
                isDesktop,
                windowWidth
            }}
        >
            <Header/>
            <Hero/>
            <ChronoLine
                startDate={'2012'}
                endDate={'2023'}
            />
            <About ref={aboutRef}/>
            <OurProjects ref={casesRef}/>
            <Partners/>
            <CurrentProjects ref={currentProjectsRef}/>
            <EventsSchedule/>
            <SuccessStories/>
            <OurTeam/>
            <Gallery/>
            <ContactUs/>
            <Faq/>
            <Footer ref={contactRef}/>
        </GlobalContext.Provider>
    );
}

export default App;
