import { instagram } from '@/public/assets/importing';
import { AnimatePresence, motion, useInView } from 'framer-motion';
import Image from 'next/image';
import React, { Suspense, useRef } from 'react';
import TextAnimation from './TextAnimation';

const WorkCard = ({ imageUrl, heading, desc, clubs, categories, id }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <AnimatePresence>
            <motion.div
                ref={ref}
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                exit={{ opacity: 0, duration: 1 }}
                className='m-5 flex w-[320px] flex-col items-center justify-start gap-y-2'
            >
                <motion.div
                    layout
                    style={{
                        transform: isInView ? 'none' : 'translateY(200px)',
                        opacity: isInView ? 1 : 0,
                        transition:
                            'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
                    }}
                    className={`workimage relative `}
                >
                    <Suspense
                        fallback={
                            <div className='flex h-[400px] w-[320px] items-center justify-center rounded-lg border-[1px]'>
                                <svg
                                    className='h-5 w-5 animate-spin text-white'
                                    xmlns='http://www.w3.org/2000/svg'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                >
                                    <circle
                                        className='opacity-25'
                                        cx='12'
                                        cy='12'
                                        r='10'
                                        stroke='currentColor'
                                        strokeWidth={4}
                                    >
                                        {' '}
                                    </circle>
                                    <path
                                        className='opacity-75'
                                        fill='currentColor'
                                        d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                                    ></path>
                                </svg>
                            </div>
                        }
                    >
                        <Image
                            // style={{ objectFit: "fill" }}
                            loading='lazy'
                            className='workimage -z-10 aspect-4/5 overflow-hidden rounded-lg bg-orange-100 object-cover'
                            // src="https://images.pexels.com/photos/16931198/pexels-photo-16931198/free-photo-of-chateau-d-eltz-en-allemagne-au-millieux-de-la-foret.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            src={imageUrl}
                            height={400}
                            width={320}
                            // layout="responsive"
                            alt={`${heading} thumbnail`}
                        />
                    </Suspense>

                    <div className='workcardlinks absolute right-0 top-0 m-1 flex flex-col items-center gap-y-3 rounded-lg p-2'>
                        <Image
                            height={20}
                            width={20}
                            src={instagram}
                            alt='instagram thumbnail'
                            className=''
                        />
                        <Image
                            height={20}
                            width={20}
                            src={instagram}
                            alt='instagram thumbnail'
                            className=''
                        />
                    </div>
                </motion.div>
                <motion.div
                    style={{
                        transform: isInView ? 'none' : 'translateY(100px)',
                        opacity: isInView ? 1 : 0,
                        transition:
                            'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
                    }}
                    layout
                    className='w-full'
                >
                    <div className='flex flex-col items-start justify-center px-3'>
                        <h1 className='line-clamp-2 text-lg sm:text-2xl'>
                            {heading}
                        </h1>
                        {/* <TextAnimation>{heading}</TextAnimation> */}
                        {/* <p>{desc}</p> */}
                        <div className='flex gap-x-4'>
                            {clubs.map((club) => (
                                <span
                                    className='text-gradient mx-0 font-extrabold uppercase'
                                    key={id}
                                >
                                    {club}
                                </span>
                            ))}
                        </div>
                        <div className='flex gap-x-4'>
                            {categories.map((category) => (
                                <span
                                    className='rounded-md text-xs font-semibold uppercase tracking-wide text-primary-700 sm:text-sm'
                                    key={id}
                                >
                                    {category}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default WorkCard;
