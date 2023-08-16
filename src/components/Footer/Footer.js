import React, { useContext } from 'react';
import { GlobalContext } from '../../context';
import FooterMobile from './FooterMobile';
import FooterDesktop from './FooterDesktop';

export default function Footer() {
    const { isDesktop } = useContext(GlobalContext);

    return isDesktop ? <FooterDesktop /> : <FooterMobile />
}
