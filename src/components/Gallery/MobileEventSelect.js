import React from 'react';
import {ReactComponent as IconCheck} from "../../assets/img/icons/check-blue.svg";

function MobileEventSelect({events, chosen, setChosen}) {
    return (
        <ul>
            {events.map((event, i) => (
                <li
                    key={event.id ?? i}
                    className={'flex border-t border-t-second_grey/20 ml-4 mr-4 py-4'}
                    onClick={() => setChosen(event)}
                >
                    {event.id === chosen.id
                        ? (
                            <>
                                <span className={'text-black font-semibold text-sm'}>{event.name}</span>
                                <IconCheck width={16} height={16} className={'ml-auto inline'} />
                            </>
                        )
                        : (
                            <span className={'text-second_grey/60 font-semibold text-sm'}>{event.name}</span>
                        )

                    }
                </li>
            ))}
        </ul>
    );
}

export default MobileEventSelect;