import { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import { GlobalContext } from './context';
import { isDesktopPredicate } from './utils';
import Hero from './components/Hero';
import ChronoLine from './components/ui/ChronoLine';
import About from './components/About';
import OurProjects from './components/OurProjects';
import Partners from './components/Partners';
import CurrentProjects from './components/CurrentProjects';
import { EventsSchedule } from './components/Events';
import SuccessStories from './components/SuccessStories';


function App() {
    const [isDesktop, setIsDesktop] = useState(isDesktopPredicate());
    
    const updateDesktopState = () => setIsDesktop(isDesktopPredicate());

    useEffect(() => {
        window.addEventListener('resize', updateDesktopState);
        return () => window.removeEventListener('resize', updateDesktopState);
    });

    return (
        <GlobalContext.Provider value={{
            isDesktop,
        }}>
            <Header />
            <Hero />
            <ChronoLine startDate={'2012'} endDate={'2022'}/>
            <About />
            <OurProjects />
            <Partners />
            <CurrentProjects />
            <EventsSchedule />
            <SuccessStories />
        </GlobalContext.Provider>
    );
}

export default App;
