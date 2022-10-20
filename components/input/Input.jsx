import { TextInput } from '@mantine/core';

export default function MyInput() {
  return (
    <>
      <TextInput
        label="Email Address"
        description="Please enter your email"
        placeholder="example@email.com"
        inputWrapperOrder={['label', 'description', 'error', 'input']}
      />
      {/* <TextInput
        mt="xl"
        label="Custom layout"
        placeholder="Custom layout"
        description="Error and description are"
        error="both below the input"
        inputWrapperOrder={['label', 'input', 'description', 'error']}
      /> */}
    </>
  );
}