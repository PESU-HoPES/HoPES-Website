import React from 'react';
import TextAnimation from '../components/TextAnimation';
import Avatar from '../components/Avatar';
import { teamDetails } from '@/public/constants';
import TeamSection from '../components/TeamSection';

const TeamPage = () => {
    return (
        <>
            <TextAnimation>Teams</TextAnimation>
            <TeamSection />
        </>
    );
};

export default TeamPage;
