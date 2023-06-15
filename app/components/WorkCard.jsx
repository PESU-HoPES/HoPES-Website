import { worksData } from '@/constants';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import React, { Suspense } from 'react';

// import {img1} from '../../img1.jpg'
const WorkCard = ({ imageUrl, heading, desc, clubs, categories, id }) => {
    return (
        <AnimatePresence>
            <motion.div
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                exit={{ opacity: 0, duration: 1 }}
                className='m-5 flex max-w-[450px] flex-col items-start justify-start gap-y-2'
            >
                <Suspense fallback={<p>loading..</p>}>
                    <Image
                        // style={{ objectFit: "contain" }}
                        loading='lazy'
                        className='workimage mx-5 h-full w-full overflow-hidden rounded-lg md:rounded-xl bg-orange-100 object-cover'
                        src={imageUrl}
                        height={300}
                        width={400}
                        alt={`${heading} thumbnail`}
                    />
                </Suspense>
                <motion.div layout className='space-y-2 p-3 mx-2'>
                    <h1 className='line-clamp-2 text-lg sm:text-2xl'>{heading}</h1>
                    {/* <p>{desc}</p> */}
                    <div className='flex gap-x-4'>
                        {clubs.map((club) => (
                            <span
                                className='mx-0 font-extrabold text-gradient uppercase'
                                key={id}>
                                {club}
                            </span>
                        ))}
                    </div>
                    <div className='flex gap-x-4'>
                        {categories.map((category) => (
                            <span
                                className='text-xs sm:text-sm tracking-wide rounded-md font-semibold uppercase text-primary-700'
                                key={id}
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
