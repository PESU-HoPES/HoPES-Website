import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

const AvatarZoom = ({ activePerson }) => {
    return (
        <AnimatePresence>
            <div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 1, duration: 2 }}
                className='person relative flex w-60 flex-col items-center'
            >
                <Image
                    className='absolute left-2 top-2'
                    src={activePerson.picture.domainIcon}
                    height={22}
                    width={22}
                    alt={`${activePerson.role}-domain-icon`}
                />
                <p className='absolute right-2  top-2 rotate-90 text-xs font-bold text-primary-600 '>
                    {activePerson.domain}
                </p>
                <div className='container relative h-[312px] w-[400px] scale-[0.48] rounded-full hover:scale-[0.54] md:scale-[0.58] hover:md:scale-[0.65]'>
                    <div className='container-inner relative -top-[200px] origin-[50%]'>
                        <div className='circle absolute left-[10px] top-[210px] h-[380px] w-[380px] cursor-pointer rounded-full bg-primary-700'></div>
                        <Image
                            alt={`${activePerson.name}-avatar`}
                            width={340}
                            height={400}
                            className='img img1 pointer-events-none relative left-[22px] top-[164px] w-[340px]'
                            src={activePerson.picture.large}
                        />
                    </div>
                    <Image
                        width={75}
                        height={75}
                        alt={`${activePerson.name}-thumbnail`}
                        src={activePerson.picture.thumbnail}
                        className='absolute -bottom-10 left-2 h-[75px] w-[75px] rounded-full border-4 border-primary-700'
                    />
                </div>
                <p className='text-xl'>{activePerson.name}</p>
                <p className='text-base font-semibold text-primary-700'>
                    {activePerson.email}
                </p>
                <p className='text-sm'>
                    {activePerson.desc}
                </p>
            </div>
        </AnimatePresence>
    );
};

export default AvatarZoom;
