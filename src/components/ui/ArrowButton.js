import React, { useState } from 'react';

import {ReactComponent as ArrowRightIcon} from '../../assets/img/icons/arrow-right.svg';

export default function ArrowButton({ classes = '', border = false, direction = 'right', disabled = false, onClick = () => {} }) {
    const getRotation = (dir) => {
        switch(dir) {
            case 'up': return '270deg';
            case 'right': return '0deg';
            case 'left': return '180deg';
            case 'down': return '90deg';
            default: return '0deg';
        }
    }

    // const [rotation, setRotation] = useState(getRotatrion(direction));

    return (
        <button
            className={
                classes +
                ' min-w-12 min-h-12 w-12 h-12 inline-block rounded-full flex items-center justify-center cursor-pointer ' +
                (border ? `border-solid border-2 ${disabled ? 'border-second_grey' : 'border-blue'}` : '')
            }
            disabled={disabled}
            onClick={onClick}
        >
            <ArrowRightIcon className={ disabled ? 'svg-grey' : 'svg-blue'} width={20} height={20} style={{transform: `rotate(${getRotation(direction)})`}}/>
        </button>   
    );
}
