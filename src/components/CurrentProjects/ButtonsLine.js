import React from 'react';
import Button from '../ui/Button';

export default function ButtonsLine({projects, chosen, setChosen}) {
    return (
        <div className="w-full flex xl:justify-center gap-4 mt-8">
            {projects.map((project, i) => (
                <Button
                    key={i}
                    classes={i === chosen ? 'bg-blue text-white font-semibold' : 'bg-blue/20 text-blue font-semibold'}
                    onClick={() => setChosen(i)}
                >
                    {project.name}
                </Button>
            ))}
        </div>
    );
}
