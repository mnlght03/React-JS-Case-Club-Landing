import React, { useContext } from 'react';
import { GlobalContext } from '../../context';
import PersonsListDesktop from './PersonsListDesktop';
import PersonsListMobile from './PersonsListMobile';

export default function PersonsList({ persons, active, setActive }) {
    const { isDesktop } = useContext(GlobalContext);

    return isDesktop ? (
        <PersonsListDesktop
            persons={persons}
            active={active}
            setActive={setActive}
        />
    ) : (
        <PersonsListMobile
            persons={persons}
            active={active}
            setActive={setActive}
        />
    );
}
