'use client'

import { filterTabs } from "@/constants";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";




export default function Subnavbar({ label, setLabel }) {
    let [activeTab, setActiveTab] = useState(filterTabs[0].id);
    useEffect(() => {
        setLabel(activeTab)
    }, [activeTab])

    return (

        <div className="relative flex space-x-1">
            {filterTabs.map((tab) => (
                <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`${activeTab === tab.id ? "" : "hover:text-white"
                        } font-poppins relative rounded-full px-3 py-1.5 text-sm font-medium text-white outline-sky-400 transition focus-visible:outline-2`}
                >
                    {activeTab === tab.id && (
                        <motion.span
                            layoutId="bubble"
                            className="font-poppins absolute inset-0 z-10 bg-white mix-blend-difference"
                            style={{ borderRadius: 9999 }}
                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                    )}
                    {tab.label}
                </button>
            ))}
        </div>
    );
}
