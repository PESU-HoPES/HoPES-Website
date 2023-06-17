import React from 'react';
import TextAnimation from '../components/TextAnimation';
import Avatar from '../components/Avatar';
import { teamDetails } from '@/public/constants';
import TeamSection from '../components/TeamSection';

const TeamPage = () => {
    return (
        <>
            <TextAnimation>TeamPage</TextAnimation>

            <TeamSection />
            <section className='w-screen overflow-x-auto no-x-scroll flex gap-x-2'>

                {/* {teamDetails.map((detail) => {
                    return (
                        <Avatar
                            key={detail.id}
                            imageUrl={detail.picture.thumbnail}
                            name={detail.name.toLocaleLowerCase()}
                            role={detail.role.toLocaleLowerCase()}
                            domain={detail.domain.toLocaleLowerCase()}
                        />
                    );
                })} */}
            </section>
        </>
    );
};

export default TeamPage;
