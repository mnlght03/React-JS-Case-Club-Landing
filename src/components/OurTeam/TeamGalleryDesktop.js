import React from 'react';
import MemberCard from './MemberCard';

export default function TeamGalleryDesktop({ members = [] }) {
  return (
    <div className={'grid grid-cols-4 gap-4 mt-8'}>
      {members.map((member, i) => (
        <MemberCard
          classes="2xl:ml-1 mt-8"
          member={member}
          key={member.id ?? i}
        />
      ))}
    </div>
  );
}
