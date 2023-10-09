import React, {useContext, useState} from 'react';
import {GlobalContext} from '../../context';
import MobileNavButton from '../ui/MobileNavButton';

export default function Navbar({navItems, textColor = 'text-white', ...props}) {
    const {isDesktop} = useContext(GlobalContext);
    const [isHidden, setIsHidden] = useState(!isDesktop);

    return (
        <>
            {isDesktop && (
                <nav {...props}>
                    <ul className='flex'>
                        {navItems.map((item, i) => (
                            <li key={i}>
                                <a
                                    className={`${textColor} ${i === 0 ? '' : 'ml-12'} hover:underline`}
                                    href={item.href}
                                >
                                    {item.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            )}

            {!isDesktop && (
                <MobileNavButton onClick={() => setIsHidden(!isHidden)}/>
            )}
        </>
    );
}
