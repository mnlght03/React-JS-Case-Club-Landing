import {useContext} from 'react';
import {GlobalContext} from '../../context';
import RoundCard from '../ui/RoundCard';
import {ReactComponent as ArrowRightIcon} from '../../assets/img/icons/arrow-right.svg';
import {ReactComponent as PlusIcon} from '../../assets/img/icons/plus.svg';
import {ReactComponent as StarIcon} from '../../assets/img/icons/star.svg';
import HeroCardImage from '../../assets/img/hero-subblock-photo.png';

import Section from '../ui/Section';
import MainCardDesktop from './MainCardDesktop';
import MainCardMobile from './MainCardMobile';
import {textDesktop, textMobile} from '../../utils';

import '../../assets/styles/hero.css'

export default function Hero() {
    const {isDesktop} = useContext(GlobalContext);

    return (
        <Section bgColor="bg-black">
            {isDesktop ? <MainCardDesktop/> : <MainCardMobile/>}
            <div className="flex flex-wrap lg:flex-nowrap min-h-[260px]">
                <RoundCard
                    classes="w-full lg:w-6/12 flex mt-4 bg-blue min-h-[150px]"
                    style={{
                        background: `no-repeat center/100% url(${HeroCardImage})`,
                    }}
                >
                    <div className='flex items-center mt-auto'>
                        <StarIcon width={isDesktop ? 40 : 20} height={isDesktop ? 40 : 20}/>
                        <p className={`text-white font-semibold ${textMobile} ${textDesktop} ml-4`}>Мероприятия</p>
                    </div>
                </RoundCard>
                <div className="w-full lg:w-6/12 flex mt-4 lg:ml-4 ">
                    <RoundCard
                        classes="hero-projects w-6/12 bg-grey flex flex-col min-h-[150px]"
                    >
                        <ArrowRightIcon
                            style={{
                                transform: 'rotate(45deg)',
                            }}
                            width={isDesktop ? 40 : 20}
                            height={isDesktop ? 40 : 20}
                        />
                        <p className={`mt-auto text-white font-semibold ${textMobile} ${textDesktop}`}>
                            Текущие
                        </p>
                        <p className={`text-white font-semibold ${textMobile} ${textDesktop}`}>
                            проекты
                        </p>
                    </RoundCard>
                    <RoundCard
                        classes="hero-contacts w-6/12 bg-green flex flex-col ml-4 min-h-[150px]"
                    >
                        <PlusIcon
                            width={isDesktop ? 40 : 20}
                            height={isDesktop ? 40 : 20}
                        />
                        <p className={`mt-auto text-white font-semibold ${textMobile} ${textDesktop}`}>
                            Связаться
                        </p>
                        <p className={`text-white font-semibold ${textMobile} ${textDesktop}`}>
                            с нами
                        </p>
                    </RoundCard>
                </div>
            </div>
        </Section>
    );
}
