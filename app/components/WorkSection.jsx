'use client';

import React, { useEffect, useState } from 'react';
import Subnavbar from './Subnavbar';
import WorkCard from './WorkCard';
import { worksData } from '@/constants';
import { motion } from 'framer-motion';

const WorkSection = () => {
    const [label, setLabel] = useState('all');
    const [workData, setWorkData] = useState(worksData);

    useEffect(() => {
        let filterWorkData = worksData.filter((data) =>
            data.categories.includes(label)
        );
        setWorkData(filterWorkData);
    }, [workData, label]);

    return (
        <div>
            <section className='my-5 flex items-center justify-center '>
                <Subnavbar setLabel={setLabel} label={label} />
            </section>

            {/* <motion.div
                layout
                className='grid grid-cols-autofit bg-orange-400'
            > */}
                <motion.div layout className='flex items-start justify-center flex-wrap'>
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
            </motion.div>
        </div>
    );
};

export default WorkSection;
