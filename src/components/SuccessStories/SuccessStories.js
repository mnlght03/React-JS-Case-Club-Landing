import React, { useEffect, useState } from 'react';
import Section from '../ui/Section';
import { bigTextDesktop, bigTextMobile } from '../../utils';
import PersonsList from './PersonsList';
import PersonMainCard from './PersonMainCard';
import SuccessStoriesService from '../../services/SuccessStoriesService';

export default function SuccessStories() {
  const [persons, setPersons] = useState([]);

  const [active, setActive] = useState(0);

  const fetchPersons = async () => {
    const persons = await SuccessStoriesService.getAll();
    setPersons(persons);
  };

  useEffect(() => {
    fetchPersons();
  }, []);

  return (
    <Section bgColor="bg-beige" id="success-stories">
      <h1
        className={`text-center font-semibold text-black mt-8 lg:mt-16 ${bigTextMobile} ${bigTextDesktop}`}
      >
        Истории успеха
      </h1>
      <div className="flex flex-col lg:flex-row gap-6 mt-6 lg:mt-12">
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
