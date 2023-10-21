import React, { useContext } from "react";
import Section from "../ui/Section";
import { GlobalContext } from "../../context";
import ContactForm from "./ContactForm";
import ContactMessages from "./ContactMessages";

export default function ContactUs() {
    const { isDesktop } = useContext(GlobalContext);

    return (
        <Section
            bgColor="bg-blue"
            rounded={!isDesktop}
            topRoundMargin={!isDesktop}
            roundFill="bg-beige"
            id="contact-us"
        >
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-24 lg:justify-center p-2">
                <ContactMessages classes={'lg:order-last'}/>
                <ContactForm classes={'lg:w-[380px]'} />
            </div>
        </Section>
    );
}
