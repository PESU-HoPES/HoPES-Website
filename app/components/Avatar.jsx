'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

const Avatar = ({ name, role, domain, imageUrl }) => {
    return (
        <motion.div className='inline-block w-24'>

            {/* <motion.div className='same-size flex items-center justify-center flex-col'> */}
            <div className='same-size  flex  justify-center flex-col items-center rounded-lg p-2 transition-all  outline-0 outline-slate-400 hover:outline-1 hover:shadow-custom-md md:gap-y-2'>
                <Image
                    height={100}
                    width={100}
                    className={`h-12 w-12 rounded-full border p-0.5 sm:h-14 sm:w-14 md:h-24 md:w-24 ${role === 'club head'
                        ? 'border-2 border-primary-700'
                        : role === 'domain head'
                            ? 'border-primary-600'
                            : 'border-primary-300'
                        }`}
                    alt='avatar'
                    src={imageUrl}
                />
                <div className='flex flex-col items-center justify-center text-center'>
                    <p className='text-[12px] font-bold'>{name}</p>
                    <p
                        className={`rounded-sm px-[5px] py-px text-[10px] font-semibold ${role === 'club head'
                            ? 'text-primary-700'
                            : role === 'domain head'
                                ? 'text-primary-600'
                                : 'text-primary-300'
                            }`}
                    >
                        {domain}
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

export default Avatar;
