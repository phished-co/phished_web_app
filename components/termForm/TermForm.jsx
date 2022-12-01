import styled from 'styled-components';
import { useState } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';

import MidtermForm from '../midtermForm/MidtermForm';
import FacebookForm from '../facebookForm/FacebookForm';
import DocsForm from '../docsForm/DocsForm';
import NewDeviceForm from '../newDeviceForm/NewDeviceForm';
import PayoutForm from '../payoutForm/PayoutForm';
import LinkedInForm from '../linkedinForm/LinkedInForm';
import ConsentForm from '../../pages/consentForm';

import { Select, Container, Text, Title, Alert } from '@mantine/core';
import { IconAlertCircle } from '@tabler/icons';

export function TermForm({ onSendEmail, onScheduleEmail, onConsentEmail }) {
    const [templateName, setTemplateName] = useState('');
    const [consentAlert, setConsentAlert]  = useState(<Alert color="orange" onClose={closeAlert} icon={<IconAlertCircle size={16} />} title="Obtain Consent First" withCloseButton variant="outline">
    Please send a consent email below to the person you want to phish to get their approval first.</Alert>);
    function closeAlert () {
        setConsentAlert("")
    }
    const consent = <b><Text color="orange">Consent</Text></b>
    return (
        <>
            <Container size={400} px={0}>
                <br />
                {consentAlert}
            </Container>
            <form style={{ marginTop: 20 }}>
                <Select
                    name="template"
                    value={templateName}
                    onChange={setTemplateName}
                    label="Choose a template to start"
                    placeholder="Pick one"
                    data={[
                        { value: 'Consent', label: 'Consent Email', group:"Obtaining Consent From Phishee"},
                        { value: 'Facebook', label: 'Facebook', group:"Phishing Templates"},
                        { value: 'New Device', label: 'New Device', group:"Phishing Templates" },
                        { value: 'Payout', label: 'Payout', group:"Phishing Templates" },
                        { value: 'LinkedIn', label: 'LinkedIn', group:"Phishing Templates" },
                        { value: 'Google Docs', label: 'Google Docs', group:"Phishing Templates" },

                    ]}
                />
            </form>

            {templateName == '' && <div style={{ height: 250 }}></div>}


            {templateName == 'Facebook' && (
                <FacebookForm submitHandler={onSendEmail} onScheduleEmail={onScheduleEmail} />
            )}

            {templateName == 'New Device' && (
                <NewDeviceForm submitHandler={onSendEmail} onScheduleEmail={onScheduleEmail} />
            )}

            {templateName == 'Payout' &&
            (<PayoutForm submitHandler={onSendEmail} onScheduleEmail={onScheduleEmail} />
            )}

            {templateName == 'Google Docs' && (
                <DocsForm submitHandler={onSendEmail} onScheduleEmail={onScheduleEmail} />
            )}

            {templateName == 'LinkedIn' && (
                <LinkedInForm submitHandler={onSendEmail} onScheduleEmail={onScheduleEmail} />
            )}

            {templateName == 'Consent' && <ConsentForm submitHandler={onConsentEmail} />}
        </>
    );
}

export default TermForm;
