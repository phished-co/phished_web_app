import { useState } from 'react';
import { Stepper, Button, Group, TextInput, Code, Anchor, Title, Text, NativeSelect, Checkbox } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useRouter } from "next/router";
import styled from 'styled-components'

const Container = styled.div`
  .signature {
    padding: 0.5rem 0.5rem;
    margin-top: 1rem;
    outline: 2px solid #449CFE;
  }
`

export function ProgressBar() {
  const [active, setActive] = useState(0);
  const [terms, setTerms] = useState(false)
  const [privacy, setPrivacy] = useState(false)
  const [signature, setSignature] = useState('')
  const r = useRouter()

  const form = useForm({
    initialValues: {
      target: '',
      person: '',
      firstName: '',
      lastName: '',
      email: '',
      fullName: '',
    },

    validate: (values) => {
      if (active === 0) {
        // return {
        //   username:
        //     values.username.trim().length < 3
        //       ? 'Username must include at least 3 characters'
        //       : null,
        //   password:
        //     values.password.length < 6 ? 'Password must include at least 6 characters' : null,
        // };
      }

      if (active === 2) {
        return {
          // name: values.name.trim().length < 2 ? 'Name must include at least 2 characters' : null,
          email: /^\S+@\S+$/.test(values.email) ? null : 'Invalid email',
        };
      }

      return {};
    },
  });

  const nextStep = () =>
    setActive((current) => {
      if (form.validate().hasErrors) {
        return current;
      }
      return current < 4 ? current + 1 : current;
    });

  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <>
      <Stepper active={active}>
        {/* <Stepper.Step>
          <div>
            <Title mt={24} order={2} align='center'>I want to phish someone else</Title>
            <Text color='dimmed' align='center'>Help your friends and family stay safe</Text>
            <Button mt={12} type='null' onClick={nextStep} fullWidth {...form.getInputProps('target')}>Continue</Button>
          </div>
          <Divider mt={24} mb={24} />
          <div>
            <Title order={2} align='center'>I want to phish myself</Title>
            <Text color='dimmed' align='center'>Start testing yourself</Text>
            <Button mt={12} variant='outline' onClick={nextStep} disabled fullWidth>Continue</Button>
          </div>
        </Stepper.Step>

        <Stepper.Step>
          <NativeSelect required label="Who do you want to phish?" placeholder="Pick one" description='Only phish people you have a personal relationship with' data={['Family member', 'Friend', 'Coworker', 'Student', 'Client', 'Other']}{...form.getInputProps('person')} />
        </Stepper.Step> */}

        <Stepper.Step>
          {/* <TextInput label="What is their first name?" placeholder="First Name" {...form.getInputProps('firstName')} /> */}
          {/* <TextInput mt="sm" label="What is their last name?" placeholder="Last Name" {...form.getInputProps('lastName')} /> */}
          {/* <Checkbox.Group
            mt={32}
            orientation="vertical"
            label="By checking the box below you are indicating you have read and agree to our terms and conditions."
            withAsterisk
            spacing="md"
            offset="md"
            size="md"
          >
            <Checkbox label={
              <>
                I accept the{' '}
                <Anchor size="md" href="https://phished.app/terms" target="_blank">
                  terms and conditions
                </Anchor>
              </>
            } />
          </Checkbox.Group>
          <Checkbox.Group
            mt={32}
            orientation="vertical"
            label="By checking the boxes below you are indicating you have read and agree to our privacy policy."
            withAsterisk
            spacing="md"
            offset="md"
            size="md"
          >
            <Checkbox label={
              <>
                I accept the{' '}
                <Anchor size="md" href="https://phished.app/privacy" target="_blank">
                  privacy policy
                </Anchor>
              </>
            } />
          </Checkbox.Group> */}
          <Container>
            <input
              value={terms}
              type='checkbox'
              id='terms'
              onClick={() => { terms ? setTerms(false) : setTerms(true) }}
            />
            <label htmlFor='terms'> I agree to the <Anchor href="https://phished.app/terms" target="_blank">terms and agreements</Anchor></label>
          </Container>
          <Container>
            <input
              value={privacy}
              type='checkbox'
              id='privacy'
              onClick={() => { privacy ? setPrivacy(false) : setPrivacy(true) }}
            />
            <label htmlFor='privacy'> I agree to the <Anchor href="https://phished.app/privacy" target="_blank">privacy policy</Anchor></label>
          </Container>
        </Stepper.Step>

        <Stepper.Step>
          <Text size={32} mt={12} order={2}>Phished is for <Text span underline weight={600} color='red'>educational use only.</Text></Text>
          <Text size={32} mt={24} mb={24} order={2}>Phishing someone without their consent is a <Text span underline weight={600} color='red'>crime.</Text></Text>
          {/* <TextInput required mt="sm" label="What is their email?" placeholder="Email" {...form.getInputProps('email')} /> */}
          <Container>
            <label htmlFor="signature">Sign your name digitally to confirm you will adhere to the above rules</label>
          </Container>
          <Container>
            <input class='signature' type="text" id="signature" value={signature} onChange={(e) => { setSignature(e.currentTarget.value) }} mt={24} placeholder="Name" />
          </Container>

        </Stepper.Step>

        <Stepper.Completed>
          Thank you. Click Submit to proceed.
        </Stepper.Completed>
      </Stepper>

      <Group position="right" mt="xl">
        {active !== 0 && (
          <Button variant="default" onClick={prevStep}>
            Back
          </Button>
        )}
        {active === 0 && <Button type='null' onClick={() => { terms && privacy ? nextStep() : alert('You must agree to our policies.') }}>Continue</Button>}
        {active === 1 && <Button type='null' onClick={() => { signature.length >= 2 ? nextStep() : alert("Sign your full name.") }}>Continue</Button>}
        {active === 2 && <Button type='null' onClick={() => { r.push('/dashboard') }}>Submit</Button>}
      </Group>
    </>
  );
}

export default ProgressBar