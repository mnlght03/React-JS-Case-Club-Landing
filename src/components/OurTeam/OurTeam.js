import React, {useContext, useEffect, useState} from 'react';
import Section from '../ui/Section';
import {GlobalContext} from '../../context';
import OurTeamDesktop from './OurTeamDesktop';
import OurTeamMobile from './OurTeamMobile';
import TeamService from '../../services/TeamService';

export default function OurTeam() {
    const {isDesktop} = useContext(GlobalContext);
    const [members, setMembers] = useState([]);
    const fetchMembers = async () => setMembers(await TeamService.getAll());
    useEffect(() => {
        fetchMembers();
    }, []);

    return (
        <Section
            bgColor="bg-beige"
            id={"our-team"}
            classes={isDesktop ? '' : 'w-screen'}
        >
            {isDesktop ?
                <OurTeamDesktop classes={'mt-16'} members={members}/>
                :
                <OurTeamMobile classes={'mt-8'} members={members}/>
            }
        </Section>
    );
}
