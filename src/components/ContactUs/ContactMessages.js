import React from 'react';

import {ReactComponent as MessageOne} from "../../assets/img/icons/message-1.svg";
import {ReactComponent as MessageTwo} from "../../assets/img/icons/message-2.svg";

function ContactMessages({classes = ''}) {
    return (
        <div className={'flex flex-col gap-4 ' + classes}>
            <MessageOne className={''} />
            <MessageTwo  className={'self-end'} />
        </div>
    );
}

export default ContactMessages;