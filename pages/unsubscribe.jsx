import axios from 'axios';
import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Text } from '@mantine/core';
import NextNProgress from '../components/LoadingBar/LoadingBar';

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

export default function About() {
  const router = useRouter();
  const consentId = router.query.consentId;

  useEffect(() => {
    if (!consentId) return;
    const postData = async () => {
      const res = await axios.post('/api/emailSubscription', { id: consentId });
    };
    postData();
  }, [consentId]);

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
      <h1>Successfully Unsubscribed</h1>
      <div className="box">
        <Text>
          We are sad to see you go. We hope you enjoyed your time with us.
        </Text>
        <Text>If you have any feedback, please let us know. </Text>
        <Text> You can now close this window.</Text>
        <Text>Thank you.</Text>
      </div>
    </Container>
  );
}
