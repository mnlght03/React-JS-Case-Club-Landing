import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context';
import MobileNavButton from '../ui/MobileNavButton';

export default function Navbar({ navItems, ...props }) {
    const { isDesktop } = useContext(GlobalContext);
    const [isHidden, setIsHidden] = useState(!isDesktop);

    return (
        <div>
            {!isHidden && (
                <nav {...props}>
                    {navItems.map((item) => (
                        <a
                            className={`text-white ${item.key == 1 ? '' : 'ml-12'}`}
                            href={item.href}
                            key={item.key}
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
