import React, {useContext} from 'react';
import RoundCard from '../ui/RoundCard';
import {textDesktop} from '../../utils';
import {ReactComponent as BriefcaseEmoji} from '../../assets/img/icons/briefcase-emoji.svg';
import {ReactComponent as FireEmoji} from '../../assets/img/icons/fire-emoji.svg';
import {ReactComponent as HappyEmoji} from '../../assets/img/icons/happy-emoji.svg';
import {ReactComponent as DownloadIcon} from '../../assets/img/icons/download.svg';
import {GlobalContext} from '../../context';
import PillButton from '../ui/PillButton';

import '../../assets/styles/project-description.css';

export default function ProjectDescription({project}) {
    const {isDesktop} = useContext(GlobalContext);

    const downloadPresentation = () => {
    };

    return (
        <div className="flex h-max flex-col lg:flex-row gap-4 mt-12">
            <RoundCard classes="min-h-full w-full lg:py-12 lg:w-1/2 bg-white flex flex-col justify-between">
                <p className={`text-black font-semibold ${textDesktop}`}>{project.title}</p>
                <div>
                    <div className={'w-5/6 flex items-center mt-4 '}>
                        <span className="text-sm lg:text-base text-grey/40 font-semibold">{isDesktop ? 'Формат проведения' : 'Формат'}</span>
                        <span className="text-sm lg:text-base text-black  font-semibold ml-auto text-end">
                          {project.format}
                        </span>
                    </div>
                    <div className={'w-5/6 flex items-center mt-2'}>
                        <span className="text-sm lg:text-base text-grey/40 font-semibold">{isDesktop ? 'Старт чемпионата' : 'Старт'}</span>
                        <span className="text-sm lg:text-base text-black  font-semibold ml-auto text-end">
                          {project.startDate}
                        </span>
                    </div>
                </div>
                {isDesktop
                    ? (<div className="flex justify-between mt-4">
                            <PillButton classes="bg-blue border-none">
                                <span className="text-white font-semibold">Подать заявку</span>
                            </PillButton>
                            <PillButton
                                onClick={downloadPresentation}
                                classes="bg-white inline-flex items-center border-none"
                            >
                                <DownloadIcon display={'inline-block'}/>
                                <span className="text-blue font-semibold ml-2">Скачать презентацию</span>
                            </PillButton>
                        </div>)
                    : (<PillButton classes="bg-blue border-none mt-4">
                            <span className="text-white font-semibold">Зарегистрироваться</span>
                        </PillButton>)
                }
            </RoundCard>
            <div className="min-h-full w-full lg:w-1/2 flex flex-col">
                <RoundCard classes="h-1/2 w-full bg-black flex flex-col gap-4 card-bg-circles">
                    <FireEmoji
                        width={isDesktop ? 50 : 40}
                        height={isDesktop ? 50 : 40}
                        style={{zIndex: '1'}}
                    />
                    <p className="mt-auto text-white font-semibold">{project.textOne}</p>
                </RoundCard>
                <div className="h-max flex flex-col lg:flex-row gap-4 mt-4">
                    <RoundCard classes="w-full lg:w-1/2 bg-blue flex flex-col gap-4 card-bg-rectangles">
                        <BriefcaseEmoji
                            width={isDesktop ? 50 : 40}
                            height={isDesktop ? 50 : 40}
                            style={{zIndex: '1'}}
                        />
                        <p className="mt-auto text-white font-semibold">{project.textTwo}</p>
                    </RoundCard>
                    <RoundCard classes="w-full  lg:w-1/2 bg-orange flex flex-col gap-4 card-bg-quadrants">
                        <HappyEmoji
                            width={isDesktop ? 50 : 40}
                            height={isDesktop ? 50 : 40}
                            style={{zIndex: '1'}}
                        />
                        <p className="mt-auto text-white font-semibold">{project.textThree}</p>
                    </RoundCard>
                </div>
            </div>
        </div>
    );
}
