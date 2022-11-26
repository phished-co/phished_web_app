import { Button, createStyles, TextInput, Textarea } from '@mantine/core';
import styled from 'styled-components';
import { useState } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';

import MidtermForm from '../midtermForm/MidtermForm';
import FacebookForm from '../facebookForm/FacebookForm';
import DocsForm from '../docsForm/DocsForm';
import NewDeviceForm from '../newDeviceForm/NewDeviceForm';
import PayoutForm from '../payoutForm/PayoutForm';

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

    const [templateName, setTemplateName] = useState('');

    async function submitHandler(data) {
        await onSendEmail(data);
    }

    return (
        <Container>
            <h1> Choose your template to start </h1>
            <form style={{marginTop: 20 }}>
                <select mb={12} name="template" value={templateName} onChange={(e) => setTemplateName(e.target.value)}>
                    <option value="" disabled >--select here --</option>
                    <option> Basic </option>
                    <option> Facebook </option>
                    <option> New Device </option>
                    <option> Payout </option>
                    <option> Google Docs </option>



                    {/*<option> Instagram</option>*/}
                </select>
            </form>

            { templateName == '' && <div style={{height: 250 }}></div>}
            { templateName == 'Basic' && <MidtermForm submitHandler={submitHandler} onScheduleEmail={onScheduleEmail}/>}
            { templateName == 'Facebook' &&  <FacebookForm submitHandler={submitHandler}/>}
            { templateName == 'New Device' &&  <NewDeviceForm submitHandler={submitHandler}/>}
            { templateName == 'Payout' &&  <PayoutForm submitHandler={submitHandler}/>}
            { templateName == 'Google Docs' &&  <DocsForm submitHandler={submitHandler}/>}

        </Container>
    );
}

export default TermForm;
