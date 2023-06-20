import { down_arrow, instagram, right_arrow } from '@/public/assets/importing';
import { AnimatePresence, motion, useInView } from 'framer-motion';
import Image from 'next/image';
import React, { Suspense, useRef, useState } from 'react';
import { WorkImageSuspence } from './Suspence';
import Button from './Button';
import Link from 'next/link';
import TextAnimation from './TextAnimation';

const WorkCard = ({ imageUrl, heading, desc, clubs, categories, id, date }) => {
    const ref = useRef(null);
    const [isDropDownOpen, setIsDropDownOpen] = useState(false);
    const isInView = useInView(ref, { once: true });

    return (
        // <AnimatePresence>
            <motion.div
                ref={ref}
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                exit={{ opacity: 0, duration: 1 }}
                className='snap-always snap-start m-4 flex max-w-[500px] flex-col items-center justify-start gap-y-2 place-self-center self-stretch sm:mx-2 sm:self-start md:m-5 md:max-w-[550px] lg:max-w-[600px]'
            >
                <motion.div
                    layout
                    style={{
                        transform: isInView ? 'none' : 'translateY(50px)',
                        opacity: isInView ? 1 : 0,
                        transition:
                            'all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
                    }}
                    className={`workimage relative `}
                >
                    {/* <WorkImageSuspence>
                        <Image
                            loading='lazy'
                            className='workimage -z-10 aspect-video overflow-hidden rounded-lg bg-slate-700 object-cover'
                            src={imageUrl}
                            height={196}
                            width={350}
                            alt={`${heading} thumbnail`}
                        />
                    </WorkImageSuspence> */}

                    <WorkImageSuspence>
                        <motion.video
                            layout
                            controls
                            prelaod='none'
                            poster='/assets/images/work/img13.jpg'
                            className='aspect-video rounded-lg object-cover'
                            src='/assets/videos/work/vid1.mp4'
                        >
                            <source
                                src='/assets/videos/vid1.mp4'
                                type='video/mp4'
                                className='aspect-video'
                            />
                        </motion.video>
                    </WorkImageSuspence>

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
                        transform: isInView ? 'none' : 'translateY(20px)',
                        opacity: isInView ? 1 : 0,
                        transition:
                            'all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
                    }}
                    layout
                    className='w-full'
                >
                    <div className='flex flex-col items-start justify-center gap-y-2 px-3'>
                        <div className='grid w-full grid-cols-8 md:grid-cols-10'>
                            <h1 className='col-span-7 line-clamp-2 text-lg sm:text-2xl md:col-span-9'>
                                {heading}
                            </h1>
                            <div
                                onClick={() =>
                                    setIsDropDownOpen(!isDropDownOpen)
                                }
                                className='animate-bounce hover:animate-none mt-2 flex h-7 w-7 cursor-pointer items-center justify-center self-start justify-self-end rounded-full bg-slate-700/50 p-1 transition-all  hover:bg-slate-700'
                            >
                                <Image
                                    src={down_arrow}
                                    height={30}
                                    width={30}
                                    alt='drop down button'
                                    className={`transition-all ${isDropDownOpen ? 'rotate-90' : ''}`}
                                />
                            </div>
                            <span className='col-span-full text-xs text-slate-400'>
                                {date.toDateString()}
                            </span>
                            {/* <Link href='/work' className='col-span-full'>
                                <Image
                                    src={right_arrow}
                                    height={30}
                                    width={35}
                                    alt='know more'
                                    className='bg-primary-700 rounded-full w-10 h-5'
                                />
                            </Link> */}
                                {/* <Button type='primary' size="small" wide={true}>Know&nbsp;more</Button> */}
                        </div>

                        {isDropDownOpen && (
                            <AnimatePresence>
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 1 }}
                                >
                                    <div className='flex gap-x-4'>
                                        {clubs.map((club, index) => (
                                            <span
                                                className='text-gradient mx-0 font-extrabold uppercase'
                                                key={index}
                                            >
                                                {club}
                                            </span>
                                        ))}
                                    </div>
                                    <div className='flex gap-x-4'>
                                        {categories
                                            .slice(1)
                                            .map((category, index) => (
                                                <span
                                                    className='rounded-md text-xs font-semibold uppercase tracking-wide text-primary-700 sm:text-sm'
                                                    key={index}
                                                >
                                                    {category}
                                                </span>
                                            ))}
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        )}
                    </div>
                </motion.div>
            </motion.div>
        // </AnimatePresence>
    );
};

export default WorkCard;
