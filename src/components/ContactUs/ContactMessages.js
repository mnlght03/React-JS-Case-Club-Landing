import React from 'react';

import MessageOne from "../../assets/img/icons/message-1.svg";
import MessageTwo from "../../assets/img/icons/message-2.svg";

function ContactMessages({classes = ''}) {
    return (
        <div className={'flex flex-col gap-4 ' + classes}>
            <img src={MessageOne} alt="" className={'w-11/12'} />
            <img src={MessageTwo} alt="" className={'w-9/12 self-end'} />
        </div>
    );
}

export default ContactMessages;