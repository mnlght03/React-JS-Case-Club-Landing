import { useContext } from 'react';
import { GlobalContext } from '../context';
import RoundCard from '../ui/RoundCard';
import HeroCardImage from '../assets/img/hero-subblock-photo.png';
import { ReactComponent as ArrowRightIcon } from '../assets/img/icons/arrow-right.svg';
import { ReactComponent as PlusIcon } from '../assets/img/icons/plus.svg';
import { ReactComponent as BriefcaseEmoji } from '../assets/img/icons/briefcase-emoji.svg';
import { ReactComponent as SettingsEmoji } from '../assets/img/icons/settings-emoji.svg';
import PillButton from '../ui/PillButton';
import Section from '../ui/Section';
import ChatMessage from '../ui/ChatMessage';

export default function Hero() {
    const { isDesktop } = useContext(GlobalContext);

    return (
        <Section
            wrapperClasses="py-4 px-4 xl:px-48 xl:py-8"
            classes="grid grid-rows-12 grid-cols-4 auto-rows-fr gap-4 max-h-[565px] xl:max-h-[950px]"
            bgColor="bg-black"
        >
            <RoundCard classes="bg-blue xl:py-16 xl:px-28 col-span-4 row-span-6 xl:row-span-8">
                {isDesktop ? (
                    <>
                        <p className="w-fit text-white text-6xl font-semibold ">
                            Учим студентов{' '}
                            <ChatMessage classes="rounded-tr-none">
                                <SettingsEmoji
                                    width={50}
                                    height={50}
                                />{' '}
                                <span className="ml-4 text-black leading-4">думать</span>
                            </ChatMessage>
                        </p>
                        <p className="w-fit text-white text-6xl font-semibold mt-12 ml-auto mr-16">
                            так, как это делают
                        </p>
                        <ChatMessage classes='mt-12 rounded-tl-none'>
                            <span className="text-6xl font-semibold text-black mr-4 leading-3">специалисты</span>
                            <BriefcaseEmoji
                                width={50}
                                height={50}
                            />
                        </ChatMessage>
                        <p className="text-white text-6xl font-semibold mt-12 text-center">
                            в крупных компаниях
                        </p>
                    </>
                ) : (
                    <>
                        <p className="w-full text-white text-3xl font-semibold">
                            Учим студентов
                        </p>
                        <p className="w-full text-white text-3xl font-semibold mt-4">
                            <ChatMessage classes="rounded-tr-none">
                                <SettingsEmoji
                                    width={30}
                                    height={30}
                                />{' '}
                                <span className="ml-2 text-black">думать</span>
                            </ChatMessage>{' '}
                            так,
                        </p>
                        <p className="w-full text-white text-3xl font-semibold mt-4">
                            как это делают
                        </p>
                        <p className="w-full text-white text-3xl font-semibold mt-4">
                            специалисты
                        </p>
                    </>
                )}
            </RoundCard>
            <RoundCard
                classes="col-span-4 row-span-3 xl:col-span-2 xl:row-span-4"
                style={{
                    background: `no-repeat center/100% url(${HeroCardImage})`,
                }}
            >
                <img
                    src={HeroCardImage}
                    className="invisible"
                />
            </RoundCard>
            <RoundCard classes="col-span-2 row-span-3 xl:row-span-4 xl:col-span-1 bg-grey flex flex-col">
                <ArrowRightIcon
                    transform="rotate(45deg)"
                    width={isDesktop ? 40 : 20}
                    height={isDesktop ? 40 : 20}
                />
                <p className="mt-auto text-white font-semibold xl:text-2xl">
                    Текущие
                </p>
                <p className="text-white font-semibold xl:text-2xl">проекты</p>
            </RoundCard>
            <RoundCard classes="col-span-2 row-span-3 xl:row-span-4 xl:col-span-1 bg-green flex flex-col">
                <PlusIcon
                    width={isDesktop ? 40 : 20}
                    height={isDesktop ? 40 : 20}
                />
                <p className="mt-auto text-white font-semibold xl:text-2xl">
                    Связаться
                </p>
                <p className="text-white font-semibold xl:text-2xl">с нами</p>
            </RoundCard>
        </Section>
    );
}
