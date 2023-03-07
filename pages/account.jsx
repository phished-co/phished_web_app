import PhishForm from '../components/phishForm/PhishForm';
import MidtermForm from '../components/midtermForm/MidtermForm';
import TermForm from '../components/termForm/TermForm';
import styled from 'styled-components';
import { Container } from '@mantine/core';
import { authOptions } from './api/auth/[...nextauth]';
import { unstable_getServerSession } from 'next-auth';
import NextNProgress from '../components/LoadingBar/LoadingBar';
import { useSession } from 'next-auth/react';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Text } from '@mantine/core';

export default function Home() {
  const { data: session } = useSession();
  // console.log(session);

  const handleSendEmail = async (emailProperties) => {
    if (session) {
      // checking for consent, if it exist send the email
      const consent = await axios.get(
        `/api/consentData?to=${emailProperties.to}&creator=${session.user.email}`
      );

      //if there is consent send the email

      if (consent.data.isConsented && emailProperties.template !== 'consent') {
        await axios.post('/api/emailSent', {
          ...emailProperties,
          replyTo: 'phishedapp@gmail.com',
          creatorEmail: session.user.email,
          consentId: consent.data.id,
        });
      }
      return consent.data.isConsented;
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
      <Container size="xs" px="xs">
        <br />
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
        destination: '/',
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
