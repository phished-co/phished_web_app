import PhishForm from '../components/phishForm/PhishForm';
import MidtermForm from '../components/midtermForm/MidtermForm';
import TermForm from '../components/termForm/TermForm';
import NextNProgress from '../components/LoadingBar/LoadingBar';
import axios from 'axios';
import styled from 'styled-components';
import { authOptions } from './api/auth/[...nextauth]';
import { unstable_getServerSession } from 'next-auth';

import { useSession } from 'next-auth/react';
import React, { useState, useEffect } from 'react';

export const Container = styled.div`
  max-width: 360px;
  margin: 0 auto;
  margin-top: 4rem;
  font-family: 'Verdana';
  text-transform: uppercase;
  color: #292a2d;
`;

export default function Home() {
  const { data: session } = useSession();
  console.log(session);

  const handleSendEmail = async (emailProperties) => {
    if (session) {
      const res = await axios.post('/api/emailSent', {
        ...emailProperties,
        replyTo: 'phishedapp@gmail.com',
        creatorEmail: session.user.email,
      });

      return res.data;
    }
  };

  const handleConsentEmail = async (emailProperties) => {
    if (session) {
      const res = await axios.post('/api/consent', {
        ...emailProperties,
        replyTo: 'phishedapp@gmail.com',
        creatorEmail: session.user.email,
      });
      return res.data;
    }
  };

  const handleScheduleEmail = (props) => {
    axios.post('/api/emailScheduled', {
      userId: session.userId,
      ...props,
    });
  };

  return (
    <>
      <NextNProgress
        color="#459CFB"
        startPosition={0.3}
        stopDelayMs={300}
        height={5}
        showOnShallow={true}
        easing="ease"
        speed={500}
        options={{ showSpinner: false }}
      />
      <Container>
        <TermForm
          onSendEmail={handleSendEmail}
          onScheduleEmail={handleScheduleEmail}
          onConsentEmail={handleConsentEmail}
        />
      </Container>
    </>
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
