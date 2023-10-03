import React, { useContext, useEffect, useMemo, useState } from 'react';
import Section from '../ui/Section';
import { bigTextDesktop, bigTextMobile } from '../../utils';
import PartnersButton from './PartnersButton';
import { GlobalContext } from '../../context';
import PartnersSlider from './PartnersSlider';
import PartnerService from '../../services/PartnerService';

export default function Partners() {
  const { isDesktop } = useContext(GlobalContext);
  const [partners, setPartners] = useState([]);

  const fecthPartners = async () => {
    const partners = await PartnerService.getAll();
    setPartners(partners);
  };

  useEffect(() => {
    fecthPartners();
  }, []);

  const partnersSplit = useMemo(() => {
    return [
      partners.slice(0, Math.floor(partners.length / 2)),
      partners.slice(Math.floor(partners.length / 2)),
    ];
  }, [partners]);

  return (
    <Section bgColor="bg-black">
      <div className="flex items-center justify-between mt-6 xl:mt-8">
        <h1 className={`text-white font-semibold ${bigTextMobile} ${bigTextDesktop}`}>
          С нами сотрудничали
        </h1>
        {isDesktop && <PartnersButton />}
      </div>
      <PartnersSlider
        partners={partnersSplit[0]}
        classes="mt-16"
      />
      <PartnersSlider partners={partnersSplit[1]} classes='mt-4'/>
    </Section>
  );
}
