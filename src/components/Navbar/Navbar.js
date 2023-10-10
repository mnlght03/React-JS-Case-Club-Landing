import React, {useContext, useState} from 'react';
import {GlobalContext} from '../../context';
import MobileNavButton from '../ui/MobileNavButton';
import Popup from "../ui/Popup";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

export default function Navbar({navItems, textColor = 'text-white'}) {
    const {isDesktop} = useContext(GlobalContext);
    const [isHidden, setIsHidden] = useState(isDesktop);

    return (
        <>
            {isDesktop && (
                <DesktopNav navItems={navItems} textColor={textColor}/>
            )}

            {!isDesktop && (
                <MobileNavButton onClick={() => setIsHidden(!isHidden)}/>
            )}

            {!isHidden && (
                <Popup closeFn={() => setIsHidden(true)}>
                    <MobileNav navItems={navItems} textColor={textColor}/>
                </Popup>
            )}
        </>
    );
}
