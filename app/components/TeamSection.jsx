'use client'

import React, { useEffect, useState } from 'react';
import Subnavbar from './Subnavbar';
import Avatar from './Avatar';
import { LayoutGroup, motion } from 'framer-motion';
import { filterRoles, teamDetails } from '@/public/constants';
import { data } from 'autoprefixer';


const TeamSection = () => {
  const [label, setLabel] = useState('all');
  const [teamDataOriginal, setTeamDataOriginal] = useState(teamDetails);
  const [teamData, setTeamData] = useState(teamDataOriginal);

  useEffect(() => {
    let filterTeamData = teamDataOriginal.filter((data) => data.categories.includes(label));
    setTeamData(filterTeamData)
  }, [label])

  return (
    <div>
      <section className='my-5 flex items-center justify-center'>
        <Subnavbar setLabel={setLabel} label={label} filterTabs={filterRoles} />
      </section>

      <motion.section className='w-screen overflow-x-auto no-x-scroll flex gap-x-2 md:gap-x-6'>

        {teamData.map((detail) => {
          return (
            <Avatar
              categories={detail.categories}
              key={detail.id}
              id={detail.id}
              imageUrl={detail.picture.thumbnail}
              name={detail.name.toLocaleLowerCase()}
              role={detail.role.toLocaleLowerCase()}
              domain={detail.domain.toLocaleLowerCase()}
            />
          );
        })}
      </motion.section>
    </div>
  )
}

export default TeamSection