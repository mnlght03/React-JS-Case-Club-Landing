import React, { useContext, useEffect, useState } from 'react';
import Section from '../ui/Section';
import { bigTextDesktop, bigTextMobile } from '../../utils';
import PartnersButton from './PartnersButton';
import { GlobalContext } from '../../context';
import PartnersSlider from './PartnersSlider';
import PartnersService from './PartnersService';

export default function Partners() {
    const { isDesktop } = useContext(GlobalContext);
    const [partners, setPartners] = useState([]);

    const fecthPartners = async () => {
        const partners = await PartnersService.getAllPartners();
        setPartners(partners);
    };

    useEffect(() => {
        fecthPartners();
    }, []);

    return (
        <Section bgColor="bg-black">
            <div className="flex items-center justify-between mt-6 xl:mt-8">
                <h1
                    className={`text-white font-semibold ${bigTextMobile} ${bigTextDesktop}`}
                >
                    С нами сотрудничали
                </h1>
                {isDesktop && <PartnersButton />}
            </div>
            <PartnersSlider partners={partners} classes='mt-12'/>
        </Section>
    );
}
