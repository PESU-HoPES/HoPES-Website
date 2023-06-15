import { worksData } from '@/constants';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import React, { Suspense } from 'react';

const WorkCard = ({ imageUrl, heading, desc, clubs, categories, id }) => {
    return (
        <AnimatePresence>
            <motion.div
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                exit={{ opacity: 0, duration: 1 }}
                className='m-5 flex max-w-[500px] flex-col items-center justify-center gap-y-2'
            >
                <Suspense fallback={<p>loading..</p>}>
                    <motion.img
                        layout
                        // style={{ objectFit: "contain" }}
                        // placeholder='blur'
                        loading='lazy'
                        className='workimage mx-5 h-full w-full overflow-hidden rounded-lg bg-orange-100 object-cover'
                        src={imageUrl}
                        height={300}
                        width={480}
                        alt={`${heading} thumbnail`}
                    />
                </Suspense>
                <motion.div layout className='flex flex-col gap-y-2 p-3'>
                    <h1 className='text-xl sm:text-2xl'>{heading}</h1>
                    {/* <p>{desc}</p> */}
                    {clubs.map((club) => (
                        <span className='font-extrabold' key={worksData[0].id}>
                            {club}
                        </span>
                    ))}
                    <div className='flex gap-x-4'>
                        {categories.map((category) => (
                            <span
                                className='text-xs sm:text-sm rounded-md font-semibold uppercase text-primary-700'
                                key={worksData.id}
                            >
                                {category}
                            </span>
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default WorkCard;
