import { useState } from 'react';
import { Stepper, Button, Group, TextInput, Code, Divider, Title, Text, NativeSelect, Checkbox } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useRouter } from "next/router";

export function ProgressBar() {
  const [active, setActive] = useState(0);
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
      <Stepper active={active} breakpoint="sm">
        <Stepper.Step>
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
        </Stepper.Step>

        <Stepper.Step>
          <TextInput label="What is their first name?" placeholder="First Name" {...form.getInputProps('firstName')} />
          <TextInput mt="sm" label="What is their last name?" placeholder="Last Name" {...form.getInputProps('lastName')} />
          <TextInput required mt="sm" label="What is their email?" placeholder="Email" {...form.getInputProps('email')} />
        </Stepper.Step>

        <Stepper.Step>
          <Text size={32} mt={12} order={2}>Phished is for <Text span underline weight={600} color='red'>educational use only.</Text></Text>
          <Text size={32} mt={24} order={2}>Phishing someone without their consent is a <Text span underline weight={600} color='red'>crime.</Text></Text>
          <Checkbox mt={36} label="I agree to only phish people I have a personal relationship with" />
          <Checkbox mt={12} label="I agree to use Phished for educational purposes exclusively" />
          <TextInput mt={24} label="Type your name to indicate you agree with our terms of use" placeholder="Name" {...form.getInputProps('fullName')} required />
        </Stepper.Step>

        <Stepper.Completed>
          Completed! Form values:
          <Code block mt="xl">
            {JSON.stringify(form.values, null, 2)}
          </Code>
        </Stepper.Completed>
      </Stepper>

      <Group position="right" mt="xl">
        {active !== 0 && (
          <Button variant="default" onClick={prevStep}>
            Back
          </Button>
        )}
        {active < 4 && active !== 0 && <Button type='null' onClick={nextStep}>Next step</Button>}
        {active === 4 && <Button type='null' onClick={() => { r.push('/dashboard') }}>Submit</Button>}
      </Group>
    </>
  );
}

export default ProgressBar