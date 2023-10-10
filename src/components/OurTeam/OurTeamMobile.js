import React from "react";
import MemberCard from "./MemberCard";
import Slider from "../ui/Slider";

export default function OurTeamMobile({members = [], classes = ''}) {
    return (
        <div>
            <h1 className="font-semibold text-center text-3xl">Наша команда</h1>
            <Slider
                classes="flex flex-col gap-6 mt-8"
                minOffset={0}
                maxOffset={150 * Math.ceil(members.length / 2) - 16 * Math.floor(members.length / 2)}
            >
                <div className='flex gap-4'>
                    {[...Array(Math.ceil(members.length / 2))].map((_, i) =>
                        <MemberCard
                            member={members[i]}
                            key={members[i].id ?? i}
                        />)}
                </div>
                <div className='flex gap-4'>
                    {[...Array(Math.floor(members.length / 2))]
                        .map((_, i) => i + Math.ceil(members.length / 2))
                        .map((i) =>
                            (<MemberCard
                                member={members[i]}
                                key={members[i].id ?? i}
                            />))}
                </div>
            </Slider>
        </div>
    );
}
