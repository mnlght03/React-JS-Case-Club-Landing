import React from 'react';
import MemberCard from './MemberCard';

export default function TeamGalleryDesktop({ members = [] }) {
  return (
    <div className={'grid grid-cols-4 gap-x-4 gap-y-8 mt-8'}>
      {members.map((member, i) => (
        <MemberCard
          member={member}
          key={member.id ?? i}
        />
      ))}
    </div>
  );
}
