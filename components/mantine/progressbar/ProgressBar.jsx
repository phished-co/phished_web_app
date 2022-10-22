import { useState } from 'react';
import { Stepper, Button, Group } from '@mantine/core';

export function ProgressBar() {
  const [active, setActive] = useState(1);
  const nextStep = () => setActive((current) => (current < 6 ? current + 1 : current));
  const prevStep = () => setActive((current) => (current > 1 ? current - 1 : current));

  return (
    <>
      <Stepper active={active} onStepClick={setActive} breakpoint="sm">
        <Stepper.Step label="Create an account">
          Step 1 content: describe this 
        </Stepper.Step>
        <Stepper.Step label="Verify email">
          Step 2 content: describe this 
        </Stepper.Step>
        <Stepper.Step label="describe this ">
          Step 3 content: describe this 
        </Stepper.Step>
        <Stepper.Step label="describe this ">
          Step 4 content: describe this 
        </Stepper.Step>
        <Stepper.Step label="describe this ">
          Step 5 content: describe this 
        </Stepper.Step>
        <Stepper.Step label="Go Phish!">
          Step 6 content: describe this 
        </Stepper.Step>
        <Stepper.Completed>
          Completed, click back button to get to previous step
        </Stepper.Completed>
      </Stepper>

      {/* <Group position="center" mt="xl">
        <Button variant="default" onClick={prevStep}>Back</Button>
        <Button onClick={nextStep}>Next step</Button>
      </Group> */}
    </>
  );
}