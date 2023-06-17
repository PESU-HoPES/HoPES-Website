import React from 'react';
import TextAnimation from '../components/TextAnimation';
import Avatar from '../components/Avatar';
import { teamDetails } from '@/public/constants';
import TeamSection from '../components/TeamSection';

const TeamPage = () => {
    return (
        <>
            <div className='mt-[10vmin] flex flex-col mx-auto items-center md:max-w-[900px] sm:max-w-[720px] ss:max-w-[600px] xs:max-w-[400px] max-w-[300px]'>
                <div className='mr-auto'>
                    <TextAnimation size='larger'>
                        Meet&nbsp;our
                    </TextAnimation>
                </div>
                <div className='ml-auto sm:-mt-6 '>
                    <TextAnimation size='larger'>
                        wholesum&nbsp;team
                    </TextAnimation>
                </div>
            </div>
            <TeamSection />
        </>
    );
};

export default TeamPage;
