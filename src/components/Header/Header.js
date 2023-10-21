import { useContext } from 'react';
import Navbar from '../Navbar';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { GlobalContext } from '../../context';
import Section from '../ui/Section';
import { PartnersButton } from '../Partners';

export default function Header() {
    const navItems = [
        { text: 'О нас', href: '#about' },
        { text: 'Кейсы', href: '#cases' },
        { text: 'Текущие проекты', href: '#current-projects' },
        { text: 'Контакты', href: '#contacts' },
    ];

    const { isDesktop } = useContext(GlobalContext);

    return (
        <Section
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
