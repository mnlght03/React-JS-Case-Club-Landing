import React, { useEffect, useState } from 'react';
import Section from '../ui/Section';
import { bigTextDesktop, bigTextMobile } from '../../utils';
import PersonsList from './PersonsList';
import PersonService from './PersonService';
import PersonMainCard from './PersonMainCard';

export default function SuccessStories() {
    const [persons, setPersons] = useState([]);

    const [active, setActive] = useState(0);

    const fetchPersons = async () => {
        const persons = await PersonService.getAll();
        setPersons(persons);
    };

    useEffect(() => {
        fetchPersons();
    }, []);

    return (
        <Section bgColor="bg-beige">
            <h1
                className={`text-center font-semibold text-black mt-8 xl:mt-16 ${bigTextMobile} ${bigTextDesktop}`}
            >
                Истории успеха
            </h1>
            <div className="flex flex-col xl:flex-row gap-4 mt-6 xl:mt-12">
                {persons.length > 0 && (
                    <>
                        <PersonsList
                            persons={persons}
                            active={active}
                            setActive={setActive}
                        />
                        <PersonMainCard person={persons[active]} />
                    </>
                )}
            </div>
        </Section>
    );
}
