import NextNProgress from '../components/LoadingBar/LoadingBar';
import axios from 'axios';
import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Text, Title, Divider, Accordion } from '@mantine/core';

const Container = styled.div`
  // max-width: 420px;
  // margin: 0 auto;
  // padding: 1rem;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;

  .box {
    border: 1px solid #459cfb;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'verdana';
    text-align: center;
    margin: 1.5rem;
    padding: 4rem;
    // width: 100%;
  }

  h1 {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
    font-weight: 600;
    font-family: 'verdana';
    color: #459cfb;
    margin: 4rem;
  }
`;

export default function Consent() {
  const router = useRouter();
  const emailId = router.query.consentCode;

  useEffect(() => {
    if (!emailId) return;

    const postData = async () => {
      const res = await axios.post('/api/consentData', { id: emailId });
    };
    postData();
  }, [emailId]);

  return (
    <Container>
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
      <h1>Thank you for your consent!</h1>
      <div className="box">
        <Text>
          We are reaching out to the sender who requested your phishing
          education.
        </Text>
        <Text>You can now close this window.</Text>
        <Text>Thank you.</Text>
      </div>
    </Container>
  );
}
