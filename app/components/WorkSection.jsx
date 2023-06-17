'use client';

import React, { useEffect, useState } from 'react';
import Subnavbar from './Subnavbar';
import WorkCard from './WorkCard';
import { worksData, filterTabs } from '@/public/constants';
import { LayoutGroup, motion } from 'framer-motion';

const WorkSection = () => {
    const [label, setLabel] = useState('all');
    const [workData, setWorkData] = useState(worksData);

    useEffect(() => {
        let filterWorkData = worksData.filter((data) =>
            data.categories.includes(label)
        );
        setWorkData(filterWorkData);
    }, [label]);

    return (
        <div>
            <section className='my-5 flex items-center justify-center'>
                <Subnavbar setLabel={setLabel} label={label} filterTabs={filterTabs}/>
            </section>

            <motion.div
                layout
                className='place-content-center grid grid-cols-1 place-items-stretch gap-x-3 gap-y-6 md:gap-y-1 sm:grid-cols-2 3xl:grid-cols-4 ss:place-items-center md:mx-20 lg:grid-cols-3'
            >
                {/* <motion.div layout className='flex items-start justify-center flex-wrap gap-y-5 gap-x-1 ss:gap-x-4'> */}
                <LayoutGroup>
                    {workData.map((data) => (
                        <WorkCard
                            id={data.id}
                            key={data.id}
                            heading={data.heading}
                            desc={data.desc}
                            imageUrl={data.imageUrl}
                            clubs={data.clubs}
                            categories={data.categories.slice(1)}
                        />
                    ))}
                </LayoutGroup>
            </motion.div>
        </div>
    );
};

export default WorkSection;
