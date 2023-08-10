import React from "react";
import Button from "../ui/Button";
import { xsTextDesktop } from "../../utils";

export default function EventCardButtons({keywords, style = 'blue', classes=''}) {
    let color = ['', ''];

    // switch instead of string template for tailwing purgecss
    switch(style) {
        case 'blue': color[0] = 'bg-blue text-white'; color[1] = 'bg-blue/20 text-blue'; break;
        case 'purple': color[0] = 'bg-purple text-white'; color[1] = 'bg-purple/20 text-purple'; break;
        case 'red': color[0] = 'bg-red text-white'; color[1] = 'bg-red/20 text-red'; break;
        default: break;
    }

  return <div className={`flex gap-4 ${classes}`}>
    {keywords.map((word, i)=> <Button key={i} classes={`font-semibold ${xsTextDesktop} ${color[i % 2]}`} disabled>{word}</Button>)}
  </div>;
}
