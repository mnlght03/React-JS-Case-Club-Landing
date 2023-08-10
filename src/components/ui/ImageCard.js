import React from "react";
import RoundCard from "./RoundCard";

export default function ImageCard({classes = '', imgSrc = '', imgAlt = '', children = null}) {
  return (
    <RoundCard classes={classes} style={{
        // background: `no-repeat center/100% url(${imgSrc})`
        background: '#828CA3'
    }}>
        {children}
    </RoundCard>
  );
}
