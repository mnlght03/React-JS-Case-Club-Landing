import React from "react";
import MemberCard from "./MemberCard";
import Slider from "../ui/Slider";

export default function OurTeamMobile({members = [], classes = ''}) {
    return (
        <>
            <h1 className="font-semibold text-center text-3xl mt-8">Наша команда</h1>
            <Slider
                classes="mt-8"
            >
                <div className={'w-fit px-4'}>
                    <div className='flex gap-4'>
                        {[...Array(Math.ceil(members.length / 2))].map((_, i) =>
                            <MemberCard
                                member={members[i]}
                                key={members[i].id ?? i}
                            />)}
                    </div>
                    <div className='flex gap-4 mt-6'>
                        {[...Array(Math.floor(members.length / 2))]
                            .map((_, i) => i + Math.ceil(members.length / 2))
                            .map((i) =>
                                (<MemberCard
                                    member={members[i]}
                                    key={members[i].id ?? i}
                                />))}
                    </div>
                </div>
            </Slider>
        </>
    );
}
