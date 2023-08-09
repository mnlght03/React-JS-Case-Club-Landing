import React, { useContext, useState } from 'react';
import { GlobalContext } from '../../context';
import MobileNavButton from '../ui/MobileNavButton';

export default function Navbar({ navItems, ...props }) {
    const { isDesktop } = useContext(GlobalContext);
    const [isHidden, setIsHidden] = useState(!isDesktop);

    return (
        <div>
            {!isHidden && (
                <nav {...props}>
                    {navItems.map((item, i) => (
                        <a
                            className={`text-white ${i === 0 ? '' : 'ml-12'} hover:underline`}
                            href={item.href}
                            key={i}
                        >
                            {item.text}
                        </a>
                    ))}
                </nav>
            )}

            {!isDesktop && (
                <MobileNavButton onClick={() => setIsHidden(!isHidden)} />
            )}
        </div>
    );
}
