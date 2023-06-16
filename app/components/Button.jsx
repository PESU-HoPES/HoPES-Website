'use client';

import { stagger, useAnimate } from 'framer-motion';
import React from 'react';

const Button = ({ children, type = 'default', wide = false }) => {
    const [scope, animate] = useAnimate();
    const changeButton = () => {
        animate([
            ['.letter', { y: -36 }, { duration: 0.12, delay: stagger(0.06) }],
            ['button', { scale: 1.1 }, { duration: 0.1, at: '<' }],
            ['button', { scale: 1 }, { duration: 0.1 }],
            ['.letter', { y: 0 }, { duration: 0.000001 }],
        ]);
    };

    return (
        <div ref={scope}>

            <button className='sr-only'>{children}</button>
            <button
                className={`${type == 'primary' ? 'bg-primary-600' : 'bg-transparent border-[0.5px] border-primary-600'} ${wide ? 'px-8' : 'px-4'} custom-button rounded-full py-1`}
                onMouseEnter={changeButton}
            >
                <span
                    className={`block h-9 overflow-hidden`}
                    aria-hidden
                >
                    {children.replace('', '\u00a0').split('').map((letter, index) => (
                        <span
                            data-letter={letter}
                            className={`font-bold text-base letter relative inline-block h-9 leading-9 after:absolute after:left-0 after:top-full after:h-8 after:content-[attr(data-letter)]`}
                            key={`${letter}-${index}`}
                        >
                            {letter}
                        </span>
                    ))}
                </span>
            </button>

        </div>
    );
};

export default Button;
