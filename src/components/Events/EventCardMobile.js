import React, { useState } from "react";
import RoundCard from "../ui/RoundCard";
import EventCardButtons from "./EventCardButtons";
import PlusButton from "../ui/PlusButton";
import PillButton from "../ui/PillButton";
import { smTextDesktop, smallTextDesktop } from "../../utils";

export default function EventCardMobile({ evt, classes = '' }) {
  const [isOpened, setIsOpened] = useState(false);

    return (
        <RoundCard classes={"w-full bg-white " + classes}>
            <span className={`w-5/12 text-blue ${smallTextDesktop}`}>{evt.date}</span>
            <div className="flex items-center mt-2">
                <p className={`font-semibold w-3/4 ${smallTextDesktop}`}>{evt.name}</p>
                <PlusButton border classes='ml-auto' onClick={() => setIsOpened(!isOpened)}/>
            </div>
            {isOpened && (
                <div className='border-solid border-second_grey/20 border-t-[1px] mt-6'>
                    <p className={`text-second_grey font-semibold w-full mt-6 ${smTextDesktop}`}>{evt.description}</p>
                    <PillButton classes={`bg-blue text-white mt-6 w-full ${smTextDesktop}`}>Зарегистрироваться</PillButton>
                </div>
            )}
        </RoundCard>
    );
}
