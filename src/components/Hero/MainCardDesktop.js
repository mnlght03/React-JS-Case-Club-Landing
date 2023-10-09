import React from 'react';
import RoundCard from '../ui/RoundCard';
import ChatMessage from '../ui/ChatMessage';
import {ReactComponent as BriefcaseEmoji} from '../../assets/img/icons/briefcase-emoji.svg';
import {ReactComponent as SettingsEmoji} from '../../assets/img/icons/settings-emoji.svg';
import {bigTextDesktop} from '../../utils';

import '../../assets/styles/main-card.css'

export default function MainCardDesktop() {
    return (
        <RoundCard classes="main-card bg-blue lg:py-16 lg:px-28 lg:row-span-8">
            <p className={`w-fit text-white ${bigTextDesktop} font-semibold `}>
                Учим студентов{' '}
                <ChatMessage classes="bg-white rounded-tr-none">
                    <SettingsEmoji
                        width={50}
                        height={50}
                    />
                    <span className="ml-4 text-black leading-4">думать</span>
                </ChatMessage>
            </p>
            <p
                className={`w-fit text-white ${bigTextDesktop} font-semibold mt-12 ml-auto mr-16`}
            >
                так, как это делают
            </p>
            <ChatMessage classes="bg-white mt-12 rounded-tl-none">
                <span
                    className={`${bigTextDesktop} font-semibold text-black mr-4 leading-3`}
                >
                    специалисты
                </span>
                <BriefcaseEmoji
                    width={50}
                    height={50}
                />
            </ChatMessage>
            <p
                className={`text-white ${bigTextDesktop} font-semibold mt-12 text-center`}
            >
                в крупных компаниях
            </p>
        </RoundCard>
    );
}
