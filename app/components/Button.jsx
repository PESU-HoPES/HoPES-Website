'use client';

import { stagger, useAnimate } from 'framer-motion';
import React from 'react';

const Button = ({
    children,
    type = 'default',
    size = 'medium',
    wide = true,
}) => {
    const [scope, animate] = useAnimate();
    const changeButton = () => {
        animate([
            [
                '.letter',
                { y: size === 'large' ? -36 : size === 'medium' ? -24 : -20 },
                { duration: 0.12, delay: stagger(0.06) },
            ],
            ['button', { scale: 1.1 }, { duration: 0.1, at: '<' }],
            ['button', { scale: 1 }, { duration: 0.1 }],
            ['.letter', { y: 0 }, { duration: 0.000001 }],
        ]);
    };

    return (
        <div ref={scope}>
            <button className='sr-only'>{children}</button>
            <button
                className={`${
                    type == 'primary'
                        ? 'bg-primary-700'
                        : 'border-[0.5px] border-primary-600 bg-transparent'
                } 
                ${wide ? 'px-5' : 'px-2'}
                 custom-button rounded-full py-1`}
                onMouseEnter={changeButton}
            >
                <span
                    className={`block overflow-hidden ${
                        size === 'large'
                            ? 'h-9'
                            : size === 'medium'
                            ? 'h-7'
                            : 'h-6'
                    }`}
                    aria-hidden
                >
                    {children
                        .replace('', '\u00a0')
                        .split('')
                        .map((letter, index) => (
                            <span
                                data-letter={letter}
                                className={`${
                                    size === 'large'
                                        ? 'h-9 leading-9 after:h-8'
                                        : size === 'medium'
                                        ? 'h-6 text-sm leading-6 after:h-5'
                                        : 'h-5 text-xs leading-5 after:h-4'
                                } letter relative inline-block text-base font-bold after:absolute after:left-0 after:top-full  after:content-[attr(data-letter)]`}
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
