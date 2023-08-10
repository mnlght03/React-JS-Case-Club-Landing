import React from 'react';
import ImageCard from '../ui/ImageCard';
import tgIcon from '../../assets/img/icons/telegram.png';
import Button from '../ui/Button';
import { smTextDesktop } from '../../utils';

export default function MemberCard({ member, classes = '', ...props }) {
    return (
        <div className={classes}>
            <ImageCard classes='w-[150px] h-[150px] xl:w-[260px] xl:h-[260px] flex'>
                <Button
                    disabled
                    classes="bg-white mt-auto"
                >
                    <img
                        src={tgIcon}
                        className="mr-2"
                        alt=""
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
