import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
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
                <div className='flex w-full items-start justify-between'>
                    <Image
                        className='h-8 w-8 rounded-lg p-2 bg-white'
                        src={activePerson.picture.domainIcon}
                        height={30}
                        width={30}
                        alt={`${activePerson.role}-domain-icon`}
                    />
                    <div className='flex flex-col items-center justify-center gap-y-1 border-r p-1'>
                        {activePerson.contacts.map((contact) => (
                            <Link
                                key={contact.type}
                                href={contact.link}
                                className='hover:bg-white'>
                                <Image
                                    src={contact.src}
                                    alt={contact.type}
                                    height={20}
                                    width={20}
                                />
                            </Link>
                        ))}
                    </div>
                </div>
                <div className='container relative bottom-3 mb-5 h-[240px] w-[400px] scale-[0.48] rounded-full hover:scale-[0.54] md:mb-8 md:h-[280px] md:scale-[0.58] hover:md:scale-[0.65]'>
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
                        className='absolute -bottom-[100px] left-2  h-[75px]  w-[75px] rounded-full border-4 border-primary-700 md:-bottom-10'
                    />
                </div>
                <p className='text-gradient text-xl font-extrabold'>
                    {activePerson.name}
                </p>
                <p className='text-sm font-semibold text-primary-700'>
                    {activePerson.domain}
                </p>
                <p className='text-sm'>{activePerson.desc}</p>
            </div>
        </AnimatePresence>
    );
};

export default AvatarZoom;
