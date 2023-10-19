import React, { useContext, useEffect, useMemo, useState } from 'react';
import Section from '../ui/Section';
import {bigTextDesktop, mediumTextMobile} from '../../utils';
import PartnersButton from './PartnersButton';
import { GlobalContext } from '../../context';
import PartnersSlider from './PartnersSlider';
import PartnerService from '../../services/PartnerService';
import PartnersSliderMobile from "./PartnersSliderMobile";

export default function Partners() {
  const { isDesktop } = useContext(GlobalContext);
  const [partners, setPartners] = useState([]);

  const fetchPartners = async () => {
    const partners = await PartnerService.getAll();
    setPartners(partners);
  };

  useEffect(() => {
    fetchPartners();
  }, []);

  const partnersSplit = useMemo(() => {
    return [
      partners.slice(0, Math.floor(partners.length / 2)),
      partners.slice(Math.floor(partners.length / 2)),
    ];
  }, [partners]);

  return (
    <Section bgColor="bg-black" id="partners">
      <div className="flex items-center justify-between mt-6 xl:mt-8">
        <h1 className={`text-white font-semibold ${mediumTextMobile} ${bigTextDesktop}`}>
          С нами сотрудничали
        </h1>
        {isDesktop && <PartnersButton />}
      </div>
      {isDesktop
          ? (
              <>
                <PartnersSlider
                    partners={partnersSplit[0]}
                    classes="mt-16"
                />
                <PartnersSlider partners={partnersSplit[1]} classes='mt-4'/>
              </>
          )
          : (<PartnersSliderMobile partners={partners} classes='mt-4 mb-4' />)
      }

    </Section>
  );
}
