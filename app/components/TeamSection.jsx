'use client';

import React, { useEffect, useState } from 'react';
import Subnavbar from './Subnavbar';
import Avatar from './Avatar';
import { motion } from 'framer-motion';
import { filterRoles, teamDetails } from '@/public/constants';
import AvatarZoom from './AvatarZoom';

const TeamSection = () => {
    const [label, setLabel] = useState('all');
    const [activePerson, setActivePerson] = useState(null);
    const [teamDataOriginal, setTeamDataOriginal] = useState(teamDetails);
    const [teamData, setTeamData] = useState(teamDataOriginal);

    useEffect(() => {
        let filterTeamData = teamDataOriginal.filter((data) =>
            data.categories.includes(label)
        );
        setTeamData(filterTeamData);
        // console.log(activePerson);
    }, [label]);

    return (
        <div>
            <section className='my-5 flex items-center justify-center'>
                <Subnavbar
                    setLabel={setLabel}
                    label={label}
                    filterTabs={filterRoles}
                />
            </section>

            <aside className='flex items-center justify-center'>
                {activePerson !== null ? (
                    <AvatarZoom activePerson={activePerson} />
                ) : teamData.length !== 0 ? 
                    <p className='py-2 text-sm italic text-slate-500'>
                        Select avatar to know more 
                    </p> : 
                    ''
                
				}
            </aside>

            <motion.section className='no-x-scroll flex w-screen gap-x-2 overflow-x-auto py-5 md:gap-x-6'>
                {teamData.length !== 0 ? (
                    teamData.map((detail) => {
                        return (
                            <Avatar
                                key={detail.id}
                                setActivePerson={setActivePerson}
                                categories={detail.categories}
                                id={detail.id}
                                imageUrl={detail.picture}
                                name={detail.name.toLocaleLowerCase()}
                                role={detail.role.toLocaleLowerCase()}
                                domain={detail.domain.toLocaleLowerCase()}
                            />
                        );
                    })
                ) : (
                    <p className='font-lg flex w-full items-center justify-center py-2 text-sm italic text-slate-500'>
                        We currenly don&apos;t have people from this domain
                    </p>
                )}
            </motion.section>
        </div>
    );
};

export default TeamSection;
