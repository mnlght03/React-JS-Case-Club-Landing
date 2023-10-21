import React, {useContext} from 'react';
import ImageCard from '../ui/ImageCard';
import tgIcon from '../../assets/img/icons/telegram.svg';
import Button from '../ui/Button';
import {smTextDesktop} from '../../utils';
import {GlobalContext} from "../../context";

export default function MemberCard({member, classes = '', ...props}) {
    const {isDesktop} = useContext(GlobalContext)
    return (
        <div className={classes}>
            <ImageCard
                imgSrc={member.profilePhotoUrl}
                classes="h-[200px] lg:h-[260px] flex"
            >
                <Button
                    disabled
                    classes="bg-white mt-auto text-sm lg:text-base"
                    smallPadding={!isDesktop}
                >
                    <img
                        src={tgIcon}
                        className="mr-1.5 lg:mr-2"
                        alt="tg"
                        width={25}
                        height={25}
                        style={{display: 'inline-block'}}
                    />
                    {member.contact}
                </Button>
            </ImageCard>
            <p className="mt-4 font-semibold">{member.name}</p>
            <Button
                disabled
                classes={`bg-blue text-white mt-1 ${smTextDesktop}`}
            >
                {member.role}
            </Button>
        </div>
    );
}
