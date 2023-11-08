import React, {useContext, useEffect, useMemo, useState} from 'react';
import Section from '../ui/Section';
import {bigTextDesktop, mediumTextMobile} from '../../utils';
import PartnersButton from './PartnersButton';
import {GlobalContext} from '../../context';
import PartnersSlider from './PartnersSlider';
import PartnerService from '../../services/PartnerService';
import PartnersSliderMobile from "./PartnersSliderMobile";

import '../../assets/styles/partners.css';

export default function Partners() {
    const {isDesktop} = useContext(GlobalContext);
    const [partners, setPartners] = useState([]);

    const fetchPartners = async () => {
        const partners = await PartnerService.getAll();
        setPartners(partners);
    };

    useEffect(() => {
        fetchPartners();
    }, []);

    const partnersSplit = useMemo(() => {
        const leftSplit = partners.slice(0, Math.floor(partners.length / 2));
        const rightSplit = partners.slice(Math.floor(partners.length / 2));

        return [
            [...leftSplit, ...leftSplit],
            [...rightSplit, ...rightSplit]
        ];
    }, [partners]);

    return (
        <>
        <Section bgColor="bg-black" id="partners" classes={'w-screen'}>
            <div
                className="flex items-center justify-between px-4 mt-6 xl:mt-8">
                <h1 className={`text-white font-semibold ${mediumTextMobile} ${bigTextDesktop}`}>
                    С нами сотрудничали
                </h1>
                {isDesktop && <PartnersButton/>}
            </div>
        </Section>
            {isDesktop
                ? (
                    <div className={'bg-black pb-12'}>
                        <div className="partners-slide flex gap-4">
                            <PartnersSlider
                                partners={partnersSplit[0]}
                                classes="partners-first"
                            />
                            <PartnersSlider
                                partners={partnersSplit[0]}
                                classes="partners-first"
                            />
                        </div>
                        <div className={'partners-slide flex gap-4'}>
                            <PartnersSlider
                                partners={partnersSplit[1]}
                                classes='mt-4 partners-second'
                            />
                            <PartnersSlider
                                partners={partnersSplit[1]}
                                classes='mt-4 partners-second'
                            />
                        </div>
                    </div>
                )
                : (
                    <PartnersSliderMobile
                        partners={partners}
                        classes='p-4 bg-black'
                    />
                )
            }
        </>
    );
}
