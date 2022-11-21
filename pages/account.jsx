import PhishForm from '../components/phishForm/PhishForm';
import MidtermForm from '../components/midtermForm/MidtermForm';
import TermForm from '../components/termForm/TermForm';

import axios from 'axios';
import styled from 'styled-components';

import { useSession } from "next-auth/react"
import React, { useState, useEffect } from 'react';


export const Container = styled.div`
  max-width: 360px;
  margin: 0 auto;
  margin-top: 4rem;
`;


function subtractHours(date, minutes) {
    date.setMinutes(date.getMinutes() - minutes);
    return date;
}

export default function Home() {
    const { data:session} = useSession()
    console.log(session)


    const handleSendEmail = async (emailProperties) => {

        if (session) {

            const res = await axios.post('/api/emailSent', {
                ...emailProperties,
                replyTo: 'phishedapp@gmail.com',
                creatorEmail: session.user.email
            });

            return res.data;
        }
    };


    const handleScheduleEmail = (props) => {
        axios.post('/api/emailScheduled', props);
    };


    return (

        <Container>
            <TermForm
                onSendEmail={handleSendEmail}
                onScheduleEmail={handleScheduleEmail}
            />
        </Container>
    );
}
