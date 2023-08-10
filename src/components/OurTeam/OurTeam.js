import React, { useContext } from "react";
import Section from "../ui/Section";
import { GlobalContext } from "../../context";
import OurTeamDesktop from "./OurTeamDesktop";
import OurTeamMobile from "./OurTeamMobile";

export default function OurTeam() {
    const { isDesktop } = useContext(GlobalContext);

    return (
        <Section bgColor="bg-beige">
            {isDesktop ? <OurTeamDesktop classes={'mt-16'} /> : <OurTeamMobile classes={'mt-8'} />}
        </Section>
    );
}
