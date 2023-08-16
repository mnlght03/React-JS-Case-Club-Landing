import React, { useContext } from "react";
import Section from "../ui/Section";
import { GlobalContext } from "../../context";
import ContactForm from "./ContactForm";

export default function ContactUs() {
    const { isDesktop } = useContext(GlobalContext);

    return (
        <Section bgColor="bg-blue" rounded={!isDesktop} topRoundMargin={!isDesktop} roundFill="bg-beige">
            <div className="flex ">
                <ContactForm />
            </div>
        </Section>
    );
}
