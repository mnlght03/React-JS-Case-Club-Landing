import { useContext } from 'react';
import Navbar from '../Navbar';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { GlobalContext } from '../../context';
import Section from '../ui/Section';
import { PartnersButton } from '../Partners';

export default function Header() {
    const navItems = [
        { text: 'О нас', href: '#' },
        { text: 'Кейсы', href: '#' },
        { text: 'Текущие проекты', href: '#' },
        { text: 'Контакты', href: '#' },
    ];

    const { isDesktop } = useContext(GlobalContext);

    return (
        <Section
            wrapperClasses="py-4 px-4 xl:px-48 xl:py-8"
            bgColor="bg-black"
        >
            <header className="flex w-full items-center justify-between">
                <Logo width={isDesktop ? 195 : 130} height={isDesktop ? 65 : 40} />
                <Navbar navItems={navItems} />
                {isDesktop && <PartnersButton />}
            </header>
        </Section>
    );
}
