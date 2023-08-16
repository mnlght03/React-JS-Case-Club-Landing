import React, { useContext, useEffect, useState } from 'react';
import FaqService from './FaqService';
import Section from '../ui/Section';
import { bigTextDesktop, bigTextMobile } from '../../utils';
import DropdownInfoCard from '../ui/DropdownInfoCard';
import { GlobalContext } from '../../context';

export default function Faq() {
    const { isDesktop } = useContext(GlobalContext);

    const [questions, setQuestions] = useState([]);

    const fetchQuestions = async () => {
        const questions = await FaqService.getAll();
        setQuestions(questions);
    };

    useEffect(() => {
        fetchQuestions();
    }, []);

    return (
        <Section bgColor="bg-beige" rounded={!isDesktop} topRoundMargin={!isDesktop} roundFill='bg-blue' classes={isDesktop ? '' : ''}>
            <h1
                className={`xl:mt-16 text-center font-semibold ${bigTextMobile} ${bigTextDesktop}`}
            >
                FAQ
            </h1>
            <div className="mt-8">
                {questions.map((question) => (
                    <DropdownInfoCard
                        title={question.title}
                        text={question.text}
                        classes="mt-4"
                    />
                ))}
            </div>
        </Section>
    );
}
