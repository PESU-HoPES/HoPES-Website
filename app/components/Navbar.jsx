'use client'

// import "./styles.css";
import { useState, useEffect } from "react";
import { useAnimate, stagger, motion } from "framer-motion";
import { navlinks } from "@/constants";

import Link from "next/link";

function useMenuAnimation(isOpen) {
    const [scope, animate] = useAnimate();

    useEffect(() => {
        const menuAnimations = isOpen
            ? [
                [
                    "nav",
                    { transform: "translateX(0%)" },
                    { ease: [0.08, 0.65, 0.53, 0.96], duration: 0.6 }
                ],
                [
                    ".word",
                    { transform: "scale(1)", opacity: 1, filter: "blur(0px)" },
                    { delay: stagger(0.03) , at: ">"}
                ],
            ]
            : [
                [
                    ".word",
                    { transform: "scale(0.2)", opacity: 0, filter: "blur(2px)" },
                    { delay: stagger(0.03, { from: "last" }), at: "<" }
                ],
                ["nav", { transform: "translateX(-100%)" }, { at: "-0.1" }]
            ];

        animate([
            [
                "path.top",
                { d: isOpen ? "M 3 16.5 L 17 2.5" : "M 2 2.5 L 20 2.5" },
                { at: "<" }
            ],
            ["path.middle", { opacity: isOpen ? 0 : 1 }, { at: "<" }],
            [
                "path.bottom",
                { d: isOpen ? "M 3 2.5 L 17 16.346" : "M 2 16.346 L 20 16.346" },
                { at: "<" }
            ],
            ...menuAnimations
        ]);
    }, [isOpen]);

    return scope;
}

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const scope = useMenuAnimation(isOpen);

    return (
        <div ref={scope} className="z-50">
            <nav className="z-50 menu fixed w-full top-0 left-0 bottom-0 pt-[100px] translate-x-full transform bg-primary-600">
                <ul className="flex flex-col gap-3 p-4">
                    {navlinks.map(navlink => (
                        <motion.li key={navlink.id} className="block">
                            {navlink.title.split('').map((c, index) =>
                                <Link
                                    key={index}
                                    onClick={()=>setIsOpen(!isOpen)}
                                    href={navlink.href}>
                                    <span className="text-[4rem] font-bold inline-block word">
                                        {c}
                                    </span>
                                </Link>
                            )}
                        </motion.li>
                    ))}
                </ul>
            </nav>
            <MenuToggle toggle={() => setIsOpen(!isOpen)} />
        </div>
    );
}


const Path = (props) => (
    <path
        className="bg-white"
        fill="transparent"
        strokeWidth="3"
        stroke="var(--background)"
        strokeLinecap="round"
        {...props}
    />
);

export const MenuToggle = ({ toggle }) => (
    <button onClick={toggle} className="z-50 flex items-center justify-center absolute top-[18px] left-[15px] w-[50px] h-[50px] rounded-full p-[10px] bg-primary-500">
        <svg width="23" height="23" viewBox="0 0 23 18">
            <Path
                d="M 2 2.5 L 20 2.5"
                className="top"
                variants={{
                    closed: { d: "M 2 2.5 L 20 2.5" },
                    open: { d: "M 3 16.5 L 17 2.5" }
                }}
            />
            <Path d="M 2 9.423 L 20 9.423" opacity="1" className="middle bg-white" />
            <Path
                d="M 2 16.346 L 20 16.346"
                className="bottom"
                variants={{
                    closed: { d: "M 2 16.346 L 20 16.346" },
                    open: { d: "M 3 2.5 L 17 16.346" }
                }}
            />
        </svg>
    </button>
);