import React from 'react';
import RoundCard from '../ui/RoundCard';
import ChatMessage from '../ui/ChatMessage';
import { ReactComponent as SettingsEmoji } from '../../assets/img/icons/settings-emoji.svg';

export default function MainCardMobile() {
    return (
        <RoundCard classes="bg-blue">
            <p className="w-full text-white text-3xl font-semibold">
                Учим студентов
            </p>
            <p className="w-full text-white text-3xl font-semibold mt-4">
                <ChatMessage classes="bg-white rounded-tr-none">
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
        </RoundCard>
    );
}
