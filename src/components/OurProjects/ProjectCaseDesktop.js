import React from 'react';
import { smallTextDesktop } from '../../utils';
import Button from '../ui/Button';

export default function ProjectCaseDesktop({
    caseKey,
    title,
    date,
    coverage,
    participants,
    border = false,
    classes = ''
}) {
    return (
        <div className={`w-full flex items-center py-8 ${border ? 'border-solid border-t-2 border-white/40' : ''} ${classes}`}>
            <span className="flex items-center justify-center text-white text-lg  block w-12 h-12 rounded-full border-solid border-white/40 border-2">
                {caseKey}
            </span>
            <div className="ml-6">
                <p className={`text-white/60`}>{date}</p>
                <p className={`text-white font-semibold ${smallTextDesktop} mt-2`}>{title}</p>
            </div>
            <div className="ml-auto">
                {coverage && (
                    <Button classes="bg-white/10 ml-4 cursor-default">
                        <span className="text-white">{coverage} чел.</span>
                        <span className={`ml-2 text-white/60`}>Охват</span>
                    </Button>
                )}
                {participants && (
                    <Button classes="bg-white/10 ml-4 cursor-default">
                        <span className="text-white">{participants} чел.</span>
                        <span className={`ml-2 text-white/60`}>Участники</span>
                    </Button>
                )}
            </div>
        </div>
    );
}
