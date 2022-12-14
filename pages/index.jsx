import styled from 'styled-components';
import { Divider } from '@mantine/core';

// Our imports
import { HeroHeader } from '../components/mantine/heroHeader/HeroHeader';
import { FeaturesCards } from '../components/mantine/cardFeature/CardFeatures';
import { StatsGroup } from '../components/mantine/statsGroup/StatsGroup';
import { GetStarted } from '../components/getStarted/GetStarted';
import { CardCarousel } from '../components/mantine/cardCarousel/CardCarousel';
import { authOptions } from './api/auth/[...nextauth]';
import { unstable_getServerSession } from 'next-auth';

const Container = styled.div`
  .section {
    max-width: 1140px;
    margin: 0 auto;
    margin-top: 1.5rem;
    margin-bottom: 2rem;
  }
`;

export default function Home() {
  return (
    <Container>
      <main>
        <HeroHeader />
        <FeaturesCards />
        <Divider />
        <div className="section">
          <CardCarousel />
        </div>
        <div className="section">
          <StatsGroup />
        </div>
        <GetStarted />
      </main>
    </Container>
  );
}

//this fixes slight glitch when its trying to fetch the session on reload
export async function getServerSideProps(context) {
  const session = await unstable_getServerSession(
    context.req,
    context.res,
    authOptions
  );

  return {
    props: {
      session,
    },
  };
}
