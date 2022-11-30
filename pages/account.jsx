import PhishForm from '../components/phishForm/PhishForm';
import MidtermForm from '../components/midtermForm/MidtermForm';
import TermForm from '../components/termForm/TermForm';
import axios from 'axios';
import styled from 'styled-components';
import { Container } from '@mantine/core';
import { authOptions } from './api/auth/[...nextauth]';
import { unstable_getServerSession } from 'next-auth';

import { useSession } from 'next-auth/react';
import React, { useState, useEffect } from 'react';


export default function Home() {

  const { data: session } = useSession();
  // console.log(session);

    const handleSendEmail = async (emailProperties) => {
      if (session) {

      // checking for consent, if it exist send the email
      const consent = await axios.get(`/api/emailConsentCheck?to=${emailProperties.to}&creator=${session.user.email}`,);
      
      //if there is a consent send the email
      if (consent.data) {
        const res = await axios.post('/api/emailSent', {
          ...emailProperties,
          replyTo: 'phishedapp@gmail.com',
          creatorEmail: session.user.email,
        });
      }
      
      return consent.data;
      
    }};

  const handleScheduleEmail = (props) => {
    axios.post('/api/emailScheduled', {
      userId: session.userId,
      ...props,
    });
  };


  return (

    <Container size="xs" px="xs">
      <br />
      <TermForm
        onSendEmail={handleSendEmail}
        onScheduleEmail={handleScheduleEmail}
      />
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
