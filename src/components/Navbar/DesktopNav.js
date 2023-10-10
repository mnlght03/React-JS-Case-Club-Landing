import React from 'react';

function DesktopNav({navItems, textColor = 'text-white'}) {
    return (
        <nav>
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
    );
}

export default DesktopNav;