import { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import { GlobalContext } from './context';
import { isDesktopPredicate } from './utils';
import Hero from './components/Hero';
import ChronoLine from './ui/ChronoLine';
import About from './components/About';


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
        </GlobalContext.Provider>
    );
}

export default App;
