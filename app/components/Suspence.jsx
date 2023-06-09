import Image from 'next/image';
import React, { Suspense } from 'react';

export const WorkImageSuspence = ({ children }) => {
    return (
        <Suspense
            fallback={
                <div className='flex h-[196px] w-[350px] items-center justify-center rounded-lg border-[1px] border-slate-200'>
                    <div className=' rounded-full bg-slate-800 p-3'>
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
                </div>
            }
        >
            {children}
        </Suspense>
    );
};

export const AvatarSuspence = ({ children }) => {
    return (
        <Suspense
            fallback={
                <div className='flex h-12 w-12 items-center justify-center rounded-full border-[1px] border-slate-200 p-0.5 sm:h-14 sm:w-14 md:h-24 md:w-24'>
                    <div className=' rounded-full bg-slate-800 p-3'>
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
                </div>
            }
        >
            {children}
        </Suspense>
    );
};
