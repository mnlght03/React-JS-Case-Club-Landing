import React from 'react';
import MemberCard from './MemberCard';

export default function TeamGalleryDesktop({ members = [] }) {
    const items = [];
    for (let i = 0; i < 8; i++) {
        items.push(
            <MemberCard
                classes='mt-8'
                member={{ name: 'Name Name', contact: 'telegram', role: 'Руководитель' }}
            />
        );
    }

    return <div className="flex flex-wrap justify-between mt-8">{items}</div>;
}
