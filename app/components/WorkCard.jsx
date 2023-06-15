import { worksData } from '@/constants';
import Image from 'next/image';
import React, { Suspense } from 'react';


const WorkCard = ({imageUrl, heading, desc, clubs, categories}) => {
    return (
        <div className='max-w-[500px] m-5 flex flex-col items-start justify-center gap-y-3'>
            <Suspense fallback={<p>loading..</p>}>
                <Image
                    style={{ objectFit: "contain" }}
                    // placeholder='blur'
                    loading="lazy"
                    className='w-full h-full workimage mx-5 rounded-lg bg-orange-100 object-cover overflow-hidden'
                    src={imageUrl}
                    height={300}
                    width={480}
                    alt={`${worksData.id}`}
                />
            </Suspense>
            <div className='mx-5 flex flex-col gap-y-2'>
                <h1 className='sm:text-2xl text-xl'>{heading}</h1>
                <p>{desc}</p>
                {clubs.map(club => <span key={worksData[0].id}>{club}</span>)}
                <div className='flex gap-x-5'>
                    {categories.map((category) => (
                        <span className='text-sm text-primary-700 font-semibold uppercase' key={worksData.id}>{category}</span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WorkCard;
