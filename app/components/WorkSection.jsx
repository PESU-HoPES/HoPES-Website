'use client'

import React, { useEffect, useState } from 'react'
import Subnavbar from './Subnavbar'
import WorkCard from './WorkCard'
import { worksData } from '@/constants'

const WorkSection = () => {
    const [label, setLabel] = useState('all')
    const [workData, setWorkData] = useState(worksData);

    useEffect(() => {
        let filterWorkData = workData.filter(data => data.categories.includes(label))
        setWorkData(filterWorkData)
    }, [workData, label])

    return (
        <div>
            <section className='flex justify-center items-center my-5'>
                <Subnavbar setLabel={setLabel} label={label} />
            </section>
            {label}

            {workData.map(data => (
                <WorkCard key={data.id} heading={data.heading} desc={data.desc} imageUrl={data.imageUrl} clubs={data.clubs} categories={data.categories} />
            ))}

        </div>
    )
}

export default WorkSection