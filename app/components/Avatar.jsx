'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import { AvatarSuspence } from './Suspence';

const Avatar = ({
    id,
    picture,
    name,
    role,
    domain,
    categories,
    desc,
    contacts,
    setActivePerson,
}) => {
    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 1 }}
                layout
                className='inline-block '
            >
                {/* <motion.div className='same-size flex items-center justify-center flex-col'> */}
                <div className='same-size flex flex-col items-center justify-center gap-y-1 rounded-lg py-2 outline-0 outline-slate-400 transition-all hover:shadow-custom-md hover:outline-1 md:gap-y-2'>
                    <AvatarSuspence>
                        <Image
                            height={100}
                            width={100}
                            onClick={() =>
                                setActivePerson({
                                    id: id,
                                    picture: picture,
                                    name: name,
                                    role: role,
                                    categories: categories,
                                    domain: domain,
                                    desc: desc,
                                    contacts: contacts,
                                })
                            }
                            className={`shadow-inner skew-avatar h-12 w-12 cursor-pointer rounded-full border p-0.5 sm:h-14 sm:w-14 md:h-24 md:w-24 ${
                                role === 'club head'
                                    ? 'border-2 border-primary-700'
                                    : role === 'domain head'
                                    ? 'border-primary-600'
                                    : 'border-primary-300'
                            }`}
                            alt='avatar'
                            src={picture.thumbnail}
                        />
                    </AvatarSuspence>
                    <div className='flex flex-col items-center justify-center text-center'>
                        <p className='text-[12px] font-bold'>{name.toLowerCase()}</p>
                        <p
                            className={`rounded-sm px-[5px] py-px text-[10px] font-semibold ${
                                role === 'club head'
                                    ? 'text-primary-700'
                                    : role === 'domain head'
                                    ? 'text-primary-600'
                                    : 'text-primary-300'
                            }`}
                        >
                            {domain.toLowerCase()}
                        </p>
                        {/* {categories.map(category => <p key={`${category}-${id}`}>{category}</p>)} */}
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default Avatar;
