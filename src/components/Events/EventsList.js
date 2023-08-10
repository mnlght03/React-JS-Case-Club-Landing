import React from "react";
import EventCard from "./EventCard";

export default function EventsList({events, classes = ''}) {
  return (
    <div className={classes}>
        {events.map((evt, i) => {
            let style;
            switch (i % 3) {
                case 0: style = 'blue'; break;
                case 1: style = 'purple'; break;
                case 2: style = 'red'; break;
                default: break;
            }
            return <EventCard evt={evt} btnStyle={style} classes="mt-4"/>
        })}
    </div>
  );
}
