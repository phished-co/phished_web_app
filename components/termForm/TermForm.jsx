import { Button, createStyles, TextInput, Textarea } from '@mantine/core';
import styled from 'styled-components';
import { useState } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';

import MidtermForm from '../midtermForm/MidtermForm';
import FacebookForm from '../facebookForm/FacebookForm';

// import Calendar from '../datetimepicker/Calendar';


const Container = styled.div`
  .button {
    display: flex;
    gap: 1rem;
    justify-content: center;
    margin-top: 2rem;
  }
`;


export function TermForm({ onSendEmail, onScheduleEmail }) {

    const [template, setTemplate] = useState('');

    async function submitHandler(data) {
        await onSendEmail(data);
    }

    return (
        <Container>
            <h1> Choose your template to start </h1>
            <form style={{marginTop: 20 }}>
                <select mb={12} name="template" value={template} onChange={(e) => setTemplate(e.target.value)}>
                    <option value="" disabled >--choose your template --</option>
                    <option> Basic </option>
                    {/*<option> Facebook </option>*/}
                    {/*<option> Instagram</option>*/}
                </select>
            </form>


            { template == 'Basic' && <MidtermForm submitHandler={submitHandler} onScheduleEmail={onScheduleEmail}/>}
            {/*{ template == 'Facebook' &&  <FacebookForm submitHandler={submitHandler}/>}*/}
            {/*{ template == 'Instagram' && <h2>instagramform</h2>}*/}

        </Container>
    );
}

export default TermForm;
