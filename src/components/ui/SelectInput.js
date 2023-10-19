import React, {useState} from "react";
import {
    ReactComponent as IconCheck
} from "../../assets/img/icons/check-blue.svg";
import Popup from "./Popup";

export default function SelectInput({
    placeholder,
    options,
    classes = '',
    onSelect
}) {
    const [chosen, setChosen] = useState(placeholder);
    const [isOpened, setIsOpened] = useState(false);

    const handleSelect = (option) => {
        setChosen(option);
        onSelect && onSelect(option);
        setIsOpened(false)
    }

    return (
        <div
            className={'p-4 text-white/50 border-b border-white/50 cursor-pointer ' + classes}
            onClick={() => setIsOpened(true)}
        >
            <span
                className={chosen === placeholder ? '' : 'text-white'}>{chosen}</span>
            {isOpened &&
                <Popup
                    closeFn={(e) => setIsOpened(false)}
                    bgColor={'bg-blue'}
                    topRoundMargin
                >
                    <h1 className={'w-full font-semibold text-white text-lg mb-4 px-4'}>{placeholder}</h1>
                    <ul className={'text-white'}>
                        {options.map((option, i) =>
                            <li
                                onClick={() => handleSelect(option)}
                                className={'flex border-t border-t-white/20 ml-4 mr-4 py-4'}
                                key={i}
                            >
                                {option === chosen
                                    ? (
                                        <>
                                            <span
                                                className={'text-white font-semibold text-sm'}>{option}</span>
                                            <IconCheck width={16} height={16}
                                                       className={'ml-auto inline'}/>
                                        </>
                                    )
                                    : (
                                        <span
                                            className={'text-white/50 font-semibold text-sm'}>{option}</span>
                                    )

                                }
                            </li>)}
                    </ul>
                </Popup>
            }
        </div>
    );
}
