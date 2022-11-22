import styled from 'styled-components';
import { ProgressBar } from '../components/mantine/progressbar/ProgressBar';
import {
  createStyles,
  Text,
  Divider,
  Button,
  Radio,
  NumberInput,
} from '@mantine/core';
import OnboardStep from '../components/onboarding/OnboardStep';

import { authOptions } from './api/auth/[...nextauth]';
import { unstable_getServerSession } from 'next-auth';

const Container = styled.div`
  max-width: 480px;
  margin: 0 auto;
  padding: 4rem 2rem;
`;

export default function Onboarding() {
  return (
    <Container>
      <ProgressBar />
    </Container>
  );
}

export async function getServerSideProps(context) {
  const session = await unstable_getServerSession(
    context.req,
    context.res,
    authOptions
  );

  if (!session) {
    return {
      redirect: {
        destination: '/api/auth/signin',
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
}
