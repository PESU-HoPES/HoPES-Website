'use client'

import Spline from '@splinetool/react-spline';
import { Suspense } from 'react';

export default function SplineLogo() {
    return (
        <Suspense fallback={<p className='text-white'>Loading</p>}>
            <div className='rounded-lg overflow-hidden h-[350px]'>
                <Spline scene="https://prod.spline.design/K2ul2o1cLLR-HdaU/scene.splinecode" />
            </div>
        </Suspense>
    );
}
