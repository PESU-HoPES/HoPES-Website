'use client'

import { motion, useAnimate } from 'framer-motion';
import React from 'react'


const TextAnimation = ({ children, size = 'default' }) => {
    const [scope, animate] = useAnimate();
    const animateText = () => {
        // console.log('ads')
        animate([
            [".line", { width: '600px' }, { duration: 0.3 }],
            [".line", { width: '0px' }, { duration: 0.3 }],
        ])
    }
    const textAnimateVariant = {
        initial: {
            opacity: 0,
        },
        show: {
            opacity: 1,
        }
    }
    return (
        <motion.span
            className=''
            variants={textAnimateVariant}
            initial='hidden'
            animate='show'
        >
            <span className={`${size === 'larger' ? 'my-5' : size === 'large' ? '' : ''} relative whitespace-nowrap`} ref={scope} onClick={animateText}>
                {children.split('').map((c, index) => (
                    <motion.span
                        initial={{
                            opacity: 0,
                            x: 30,
                            scale: 0.5,
                        }}
                        animate={{
                            opacity: 1,
                            x: 0,
                            scale: 1,
                        }}
                        transition={{
                            duration: 0.4,
                            type: 'spring',
                            stiffness: 100,
                            delay: index * 0.1,
                        }}
                        className={`${size === 'larger' ? 'md:text-[7rem] font-extrabold md:font-bold ss:text-[4.5rem] xs:text-[3rem] text-[2.5rem]' : 'large' ? 'text-[5rem] font-bold' : ''} inline-block lowercase bg-transparent`}
                        key={index}
                    >
                        {c}
                    </motion.span>
                ))}
            </span>
        </motion.span>
    )
}
export default TextAnimation