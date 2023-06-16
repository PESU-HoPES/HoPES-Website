import { instagram } from '@/public/assets/importing';
import { AnimatePresence, motion, useInView } from 'framer-motion';
import Image from 'next/image';
import React, { Suspense, useRef } from 'react';
import TextAnimation from './TextAnimation';


const WorkCard = ({ imageUrl, heading, desc, clubs, categories, id }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });


    return (
        <AnimatePresence>
            <motion.div
                ref={ref}
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                exit={{ opacity: 0, duration: 1 }}
                className='m-5 flex w-[400px] flex-col items-center justify-start gap-y-2'
            >
                <motion.div
                    layout
                    style={{
                        transform: isInView ? "none" : "translateY(200px)",
                        opacity: isInView ? 1 : 0,
                        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                    }}
                    className={`relative workimage `}
                >
                    <Suspense fallback={<p>loading..</p>}>
                        <Image
                            // style={{ objectFit: "fill" }}
                            loading='lazy'
                            className='-z-10 aspect-4/5 object-cover workimage overflow-hidden rounded-lg bg-orange-100'
                            src={imageUrl}
                            height={500}
                            width={400}
                            alt={`${heading} thumbnail`}
                        />
                    </Suspense>
                    <div
                        className='workcardlinks absolute top-0 right-0 p-2 flex flex-col items-center gap-y-3 rounded-lg m-1'
                    >
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
                        transform: isInView ? "none" : "translateY(100px)",
                        opacity: isInView ? 1 : 0,
                        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                    }}
                    layout className='w-full'>

                    <div className='flex items-start flex-col justify-center px-3'>


                        <h1 className='line-clamp-2 text-lg sm:text-2xl'>{heading}</h1>
                        {/* <TextAnimation>{heading}</TextAnimation> */}
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
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default WorkCard;
