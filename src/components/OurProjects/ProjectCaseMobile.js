import React from 'react'
import {smallTextDesktop} from "../../utils";
import Button from "../ui/Button";

export default function ProjectCaseMobile({
    caseKey,
    title,
    date,
    coverage,
    participants,
    border = false,
    classes = ''
}) {
    return (
        <div
            className={`w-full flex flex-col py-8 ${border ? 'border-solid border-t-2 border-white/40' : ''} ${classes}`}
        >
            <div>
                 <span className="text-white text-lg">
                    {caseKey}
                </span>
                <span className='ml-4 text-white/50'>{date}</span>
            </div>
            <p className={`text-white font-semibold ${smallTextDesktop} mt-4`}>{title}</p>
            <div className='mt-4 flex items-center gap-4'>
                {coverage && (
                    <Button
                        classes="bg-white/10 cursor-default flex items-center"
                        smallPadding
                    >
                        <span className="text-white text-sm">{coverage} чел.</span>
                        <span className={`ml-2 text-white/60 text-xs`}>Охват</span>
                    </Button>
                )}
                {participants && (
                    <Button
                        classes="bg-white/10  cursor-default flex items-center"
                        smallPadding
                    >
                        <span className="text-white text-sm">{participants} чел.</span>
                        <span className={`ml-2 text-white/60 text-xs`}>Участники</span>
                    </Button>
                )}
            </div>
        </div>
    )
}
