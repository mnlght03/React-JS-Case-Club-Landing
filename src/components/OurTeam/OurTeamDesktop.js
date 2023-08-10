import React, { useState } from "react";
import { bigTextDesktop } from "../../utils";
import ScrollCounter from "../ui/ScrollCounter";
import TeamGalleryDesktop from "./TeamGalleryDesktop";

export default function OurTeamDesktop({members = [], classes = ''}) {
    const [current, setCurrent] = useState(1);

    return (
        <div>
            <div className={"flex items-center mt-16 " + classes}>
                <h1 className={`font-semibold ${bigTextDesktop}`}>Наша команда</h1>
                <ScrollCounter classes={'ml-auto'} current={current} setCurrent={setCurrent} total={4}/>
            </div>
            <TeamGalleryDesktop />
        </div>
    );
}
