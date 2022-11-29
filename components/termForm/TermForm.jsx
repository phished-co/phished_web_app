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
import { Select, Container, Text, Title} from '@mantine/core';

export function TermForm({ onSendEmail, onScheduleEmail }) {
  const [templateName, setTemplateName] = useState('');

  async function submitHandler(data) {
    await onSendEmail(data);
  }

  return (
    <>
    <Container size={400} px={0}>
              <Title order={5} weight={600} align="center" color="blue.5">
                * Please send a consent email first
          to the person you want to phish to get their confirmation.</Title>
          </Container> 
      <form style={{ marginTop: 20 }}>

        <Select  name="template"
          value={templateName}
          onChange={setTemplateName}
      label="Choose a template to start"
      placeholder="Pick one"
      data={[
        { value: 'Consent', label: 'Consent' },
        { value: 'Basic', label: 'Basic' },
        { value: 'Facebook', label: 'Facebook' },
        { value: 'New Device', label: 'New Device' },
        { value: 'Payout', label: 'Payout' },
        { value: 'Google Docs', label: 'Google Docs' },

      ]}
    />
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
        <ConsentForm submitHandler={submitHandler} />
      )}
    </>
  );
}

export default TermForm;