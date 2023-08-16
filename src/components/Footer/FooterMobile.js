import React from 'react';
import Section from '../ui/Section';
import { ReactComponent as Logo } from '../../assets/logo-dark.svg';
import { ReactComponent as ArrowRight } from '../../assets/img/icons/arrow-right.svg';
import { PartnersButton } from '../Partners';
import { mediumTextMobile, smTextDesktop, smTextMobile } from '../../utils';

export default function FooterMobile() {
    return (
        <Section bgColor="bg-beige">
            <div className='flex items-center justify-between mt-8 xl:mt-16'>
                <Logo
                    width={130}
                    height={40}
                />
                <PartnersButton smallPadding classes={`${smTextMobile}`} color='blue' />
            </div>
            <footer className={`flex flex-col justify-between mt-8`}>
                <div className='flex items-center border-solid border-second_grey/20 border-t-[1px] py-4'>
                    <a href="#" className={`text-blue font-semibold ${mediumTextMobile}`}>YouTube</a>
                    <ArrowRight height={22} width={22} className='ml-auto svg-blue' />
                </div>
                <div className='flex items-center border-solid border-second_grey/20 border-t-[1px] py-4'>
                    <a href="#" className={`text-blue font-semibold ${mediumTextMobile}`}>VKontakte</a>
                    <ArrowRight height={22} width={22} className='ml-auto svg-blue' />
                </div>
                <div className='flex items-center border-solid border-second_grey/20 border-t-[1px] py-4'>
                    <a href="#" className={`text-blue font-semibold ${mediumTextMobile}`}>Instagram</a>
                    <ArrowRight height={22} width={22} className='ml-auto svg-blue' />
                </div>
                <div className='border-solid border-second_grey/20 border-t-[1px]'>
                    <p className={`mt-4 text-second_grey font-semibold ${smTextDesktop}`}>Контакты</p>
                    <p className='mt-2 font-semibold'>+7 (913) 939-00-00</p>
                    <p className='mt-2 font-semibold'>+7 (953) 999-110-55</p>
                </div>
                <div className='mt-6 border-solid border-second_grey/20 border-t-[1px]'>
                    <a href="#" className='block mt-2 font-semibold'>Реализованные проекты</a>
                    <a href="#" className='block mt-2 font-semibold'>С нами сотрудничали</a>
                    <a href="#" className='block mt-2 font-semibold'>Расписание мероприятий</a>
                </div>
                <div className='mt-6 border-solid border-second_grey/20 border-t-[1px]'>
                    <a href="#" className='block mt-2 font-semibold'>Истории успеха</a>
                    <a href="#" className='block mt-2 font-semibold'>Наша команда</a>
                    <a href="#" className='block mt-2 font-semibold'>Мероприятия</a>
                </div>
            </footer>
        </Section>
    );
}
