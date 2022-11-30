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
import ConsentForm from '../../pages/consentForm';

// import Calendar from '../datetimepicker/Calendar';

const Container = styled.div`

  h2 {
    text-align: center;
    font-weight: 600;
    color: #459cfb; 
  }
  select {
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 0.3rem;
    margin-bottom: 1rem;
  }

  .button {
    display: flex;
    gap: 1rem;
    justify-content: center;
    margin-top: 2rem;
  }
  .exp_container {
    margin: 2rem 0 2rem 0;
    border: 2px solid #459cfb;
    border-radius: 10px;
  }

  .exp{
    display: flex;
    justify-content: center;
    margin: 1.5rem;
    padding: 2rem;
    text-transform: none;
    font-family: 'verdana';
    border: 1px solid #459cfb;
    border-radius: 10px;
  }
`;

export function TermForm({ onSendEmail, onScheduleEmail, onConsentEmail }) {
  const [templateName, setTemplateName] = useState('');

  async function submitHandler(data) {
    await onSendEmail(data);
  }

  async function submitConsentHandler(data) {
    await onConsentEmail(data);
  }

  return (
    <Container>
      
      <h2> Choose your template to start </h2>
      <div className="exp">
          We need to have confirmation from your friends and family first before
          we can start a phishing campaign. Please, send a consent email first
          to the person you want to phish.
        </div>
      <form style={{ marginTop: 20 }}>
        <select
          mb={12}
          name="template"
          value={templateName}
          onChange={(e) => setTemplateName(e.target.value)}
        >
          <option value="" disabled>
            --select here --
          </option>
          <option> Consent </option>
          <option> Basic </option>
          <option> Facebook </option>
          <option> New Device </option>
          <option> Payout </option>
          <option> Google Docs </option>

          {/*<option> Instagram</option>*/}
        </select>
      </form>
      

      {templateName == '' && <div style={{ height: 250 }}></div>}
      {templateName == 'Basic' && (
        <MidtermForm
          submitHandler={submitHandler}
          onScheduleEmail={onScheduleEmail}
        />
      )}
      {templateName == 'Facebook' && (
        <FacebookForm submitHandler={submitHandler} />
      )}
      {templateName == 'New Device' && (
        <NewDeviceForm submitHandler={submitHandler} />
      )}
      {templateName == 'Payout' && <PayoutForm submitHandler={submitHandler} />}
      {templateName == 'Google Docs' && (
        <DocsForm submitHandler={submitHandler} />
      )}
      {templateName == 'Consent' && (
        <ConsentForm submitHandler={submitConsentHandler} />
      )}
    </Container>
  );
}

export default TermForm;