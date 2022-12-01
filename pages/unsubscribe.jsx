import axios from 'axios';
import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Text} from "@mantine/core";

const Container = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  margin-top: 4rem;
`

export default function About() {


    const router = useRouter()
    const consentId = router.query.consentId

    useEffect(() => {
        if(!consentId) return;
        const postData = async () => {
            const res = await axios.post('/api/emailSubscription', {id: consentId});
        }
        postData()
    }, [consentId])
    


    return (
        <Container>
            <Text size='h3' weight='600'>Successfully Unsubscribe. </Text>
        </Container>
    );
}
