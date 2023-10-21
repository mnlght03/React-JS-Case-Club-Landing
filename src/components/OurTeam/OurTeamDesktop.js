import React, { useMemo, useState } from 'react';
import { bigTextDesktop } from '../../utils';
import ScrollCounter from '../ui/ScrollCounter';
import TeamGalleryDesktop from './TeamGalleryDesktop';

export default function OurTeamDesktop({ members = [], classes = '' }) {
  const [current, setCurrent] = useState(1);

  const pagesTotal = useMemo(() => Math.round(members.length / 8), [members]);

  return (
    <>
      <div className={'flex items-center mt-16 ' + classes}>
        <h1 className={`font-semibold ${bigTextDesktop}`}>Наша команда</h1>
        <ScrollCounter
          classes={'ml-auto'}
          current={current}
          setCurrent={setCurrent}
          total={pagesTotal}
        />
      </div>
      <TeamGalleryDesktop members={members} />
    </>
  );
}
