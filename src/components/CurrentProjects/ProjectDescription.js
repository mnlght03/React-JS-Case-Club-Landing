import React, { useContext } from 'react';
import RoundCard from '../ui/RoundCard';
import { textDesktop } from '../../utils';
import { ReactComponent as BriefcaseEmoji } from '../../assets/img/icons/briefcase-emoji.svg';
import { ReactComponent as DownloadIcon } from '../../assets/img/icons/download.svg';
import { GlobalContext } from '../../context';
import PillButton from '../ui/PillButton';

export default function ProjectDescription({ project }) {
  const { isDesktop } = useContext(GlobalContext);

  const downloadPresentation = () => {};

  return (
    <div className="flex h-max flex-col xl:flex-row gap-4 mt-12">
      <RoundCard classes="min-h-full w-full xl:py-12 xl:w-1/2 bg-white flex flex-col justify-between">
        <p className={`text-black font-semibold ${textDesktop}`}>{project.title}</p>
        <div>
          <div className={'w-5/6 flex items-center mt-4 '}>
            <span className="text-grey/40 font-semibold">Формат проведения</span>
            <span className="text-black  font-semibold ml-auto text-end">
              {project.format}
            </span>
          </div>
          <div className={'w-5/6 flex items-center mt-2'}>
            <span className="text-grey/40 font-semibold">Старт чемпионата</span>
            <span className="text-black  font-semibold ml-auto text-end">
              {project.startDate}
            </span>
          </div>
        </div>
        <div className="flex justify-between mt-4">
          <PillButton classes="bg-blue border-none">
            <span className="text-white font-semibold">Подать заявку</span>
          </PillButton>
          {isDesktop && (
            <PillButton
              onClick={downloadPresentation}
              classes="bg-white inline-flex items-center border-none"
            >
              <DownloadIcon display={'inline-block'} />
              <span className="text-blue font-semibold ml-2">Скачать презентацию</span>
            </PillButton>
          )}
        </div>
      </RoundCard>
      <div className="h-full w-full xl:w-1/2 flex flex-col">
        <RoundCard classes="min-h-1/2 w-full bg-black">
          <BriefcaseEmoji
            width={isDesktop ? 50 : 40}
            height={isDesktop ? 50 : 40}
          />
          <p className="mt-4 text-white font-semibold">{project.textOne}</p>
        </RoundCard>
        <div className="h-max flex flex-col xl:flex-row gap-4 mt-4">
          <RoundCard classes="min-h-1/2 w-full xl:w-1/2 bg-blue">
            <BriefcaseEmoji
              width={isDesktop ? 50 : 40}
              height={isDesktop ? 50 : 40}
            />
            <p className="mt-4 text-white font-semibold">{project.textTwo}</p>
          </RoundCard>
          <RoundCard classes="min-h-1/2 w-full  xl:w-1/2 bg-orange">
            <BriefcaseEmoji
              width={isDesktop ? 50 : 40}
              height={isDesktop ? 50 : 40}
            />
            <p className="mt-4 text-white font-semibold">{project.textThree}</p>
          </RoundCard>
        </div>
      </div>
    </div>
  );
}
