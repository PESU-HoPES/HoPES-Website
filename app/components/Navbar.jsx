'use client';

// import "./styles.css";
import { useState, useEffect } from 'react';
import { useAnimate, stagger, motion } from 'framer-motion';
import { navlinks } from '@/constants';

import Link from 'next/link';

function useMenuAnimation(isOpen) {
    const [scope, animate] = useAnimate();

    useEffect(() => {
        const menuAnimations = isOpen
            ? [
                [
                    'nav',
                    { transform: 'translateX(0%)' },
                    { ease: [0.08, 0.65, 0.53, 0.96], duration: 0.6 },
                ],
                [
                    '.word',
                    {
                        transform: 'scale(1)',
                        opacity: 1,
                        filter: 'blur(0px)',
                    },
                    { delay: stagger(0.03), at: '>' },
                ],
            ]
            : [
                [
                    '.word',
                    {
                        transform: 'scale(0.2)',
                        opacity: 0,
                        filter: 'blur(2px)',
                    },
                    { delay: stagger(0.03, { from: 'last' }), at: '<' },
                ],
                ['nav', { transform: 'translateX(100%)' }, { at: '-0.1' }],
            ];

        animate([
            [
                'path.top',
                { d: isOpen ? 'M 3 16.5 L 17 2.5' : 'M 2 2.5 L 20 2.5' },
                { at: '<' },
            ],
            ['path.middle', { opacity: isOpen ? 0 : 1 }, { at: '<' }],
            [
                'path.bottom',
                {
                    d: isOpen
                        ? 'M 3 2.5 L 17 16.346'
                        : 'M 2 16.346 L 20 16.346',
                },
                { at: '<' },
            ],
            ...menuAnimations,
        ]);
    }, [isOpen]);

    return scope;
}

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const scope = useMenuAnimation(isOpen);

    return (
        <div ref={scope} className='z-50'>
            <nav className='menu fixed right-0 top-0 z-50 w-full translate-x-full transform bg-primary-700 pt-[100px]'>
                <div className='no-scroll flex items-center justify-between h-full gap-3 px-10'>
                    <div>asdfaf</div>
                    <ul className='flex flex-col justify-end text-right'>
                        {navlinks.map((navlink) => (
                            <motion.li
                                key={navlink.id}
                                className='inline-block'
                                whileHover={{ x: -80, scale: 1.2 }}
                            >
                                {navlink.title.split('').map((c, index) => (
                                    <Link
                                        key={index}
                                        onClick={() => setIsOpen(!isOpen)}
                                        href={navlink.href}
                                    >
                                        <motion.span
                                            whileHover={{ backgroundColor: 'red' }}
                                            className='word inline-block text-[4rem] font-bold'
                                        >
                                            {c}
                                        </motion.span>
                                    </Link>
                                ))}
                            </motion.li>
                        ))}
                    </ul>
                </div>
            </nav>
            <div className='m-5 flex items-center justify-between gap-5'>
                <Link href='/'>logo</Link>
                <MenuToggle toggle={() => setIsOpen(!isOpen)} />
            </div>
        </div>
    );
}

const Path = (props) => (
    <path
        fill='transparent'
        strokeWidth='3'
        stroke='#fff'
        strokeLinecap='round'
        {...props}
    />
);

export const MenuToggle = ({ toggle }) => (
    <button
        className='z-50 flex h-[50px] w-[50px] items-center justify-center rounded-full bg-primary-600 p-[10px]'
        onClick={toggle}
    >
        <svg width='23' height='23' viewBox='0 0 23 18'>
            <Path
                d='M 2 2.5 L 20 2.5'
                className='top'
                variants={{
                    closed: { d: 'M 2 2.5 L 20 2.5' },
                    open: { d: 'M 3 16.5 L 17 2.5' },
                }}
            />
            <Path d='M 2 9.423 L 20 9.423' opacity='1' className='middle' />
            <Path
                d='M 2 16.346 L 20 16.346'
                className='bottom'
                variants={{
                    closed: { d: 'M 2 16.346 L 20 16.346' },
                    open: { d: 'M 3 2.5 L 17 16.346' },
                }}
            />
        </svg>
    </button>
);
