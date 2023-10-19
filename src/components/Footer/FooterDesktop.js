import React, { useContext } from 'react';
import Section from '../ui/Section';
import { ReactComponent as Logo } from '../../assets/logo-dark.svg';
import Navbar from '../Navbar';
import { PartnersButton } from '../Partners';
import { mediumTextDesktop, smTextDesktop, smallTextDesktop } from '../../utils';

export default function FooterDesktop() {
    const navItems = [
        { text: 'О нас', href: '#about' },
        { text: 'Кейсы', href: '#cases' },
        { text: 'Текущие проекты', href: '#current-projects' },
        { text: 'Контакты', href: '#contact' },
    ];

    return (
        <Section bgColor="bg-beige" id={'contacts'}>
            <div className="flex items-center justify-between mt-8 xl:mt-16">
                <Logo
                    width={195}
                    height={65}
                />
                <Navbar
                    textColor="text-black"
                    navItems={navItems}
                />
                <PartnersButton color="blue" />
            </div>
            <footer className={`flex flex-row justify-between mt-8 border-solid border-second_grey/20 border-t-[1px]`}>
                <div >
                    <p className={`mt-8 text-second_grey font-semibold ${smTextDesktop}`}>Контакты</p>
                    <p className='mt-4 font-semibold'>+7 (913) 939-00-00</p>
                    <p className='mt-4 font-semibold'>+7 (953) 999-110-55</p>
                </div>
                <div>
                    <a href="#cases" className='block mt-8 font-semibold'>Реализованные проекты</a>
                    <a href="#partners" className='block mt-4 font-semibold'>С нами сотрудничали</a>
                    <a href="#schedule" className='block mt-4 font-semibold'>Расписание мероприятий</a>
                </div>
                <div>
                    <a href="#success-stories" className='block mt-8 font-semibold'>Истории успеха</a>
                    <a href="#our-team" className='block mt-4 font-semibold'>Наша команда</a>
                    <a href="#events" className='block mt-4 font-semibold'>Мероприятия</a>
                </div>
                <div>
                    <a href="#" className={`block text-blue font-semibold mt-8 ${smallTextDesktop}`}>YouTube</a>
                    <a href="#" className={`block text-blue font-semibold mt-4 ${smallTextDesktop}`}>VKontakte</a>
                    <a href="#" className={`block text-blue font-semibold mt-4 ${smallTextDesktop}`}>Instagram</a>
                </div>
            </footer>
        </Section>
    );
}
