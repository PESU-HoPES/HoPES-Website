import Image from 'next/image';
import React from 'react';

const AvatarZoom = ({activePerson}) => {
    return (
        <div className='person flex flex-col w-[280px] items-center'>
            <div className='container rounded-full h-[312px] w-[400px] scale-[0.48] hover:scale-[0.54]'>
                <div className='container-inner relative -top-[200px] origin-[50%]'>
                    <div className='circle bg-primary-700 rounded-full h-[380px] left-[10px] cursor-pointer absolute top-[210px] w-[380px]'></div>
                    <Image
                        alt={`avatar-${activePerson.id}`}
                        width={340}
                        height={400}
                        className='img img1 pointer-events-none relative left-[22px] top-[164px] w-[340px]'
                        src={activePerson.zoomImageUrl} />
                </div>
            </div>
        </div>
    );
};

export default AvatarZoom;
