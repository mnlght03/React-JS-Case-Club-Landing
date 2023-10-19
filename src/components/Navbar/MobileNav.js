import React from 'react';

function MobileNav({navItems, textColor = 'text-white', closeFn}) {
    return (
        <nav>
            <ul className={'px-12'}>
                {navItems.map((item, i) => (
                    <li
                        key={i}
                        className={'py-4 border-b border-b-white/10'}
                        onClick={closeFn}
                    >
                        <a
                            className={`${textColor}`}
                            href={item.href}
                        >
                            {item.text}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default MobileNav;