import { TextInput, InputBase } from '@mantine/core';

export default function MyInput({
  label,
  description,
  placeholder,
  inputWrapperOrder
}) {
  return (
    <>
      <TextInput
        label={label}
        description={description}
        placeholder={placeholder}
        inputWrapperOrder={inputWrapperOrder}
        required
      />
    </>
    )}