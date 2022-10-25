import { TextInput, InputBase, PasswordInput } from '@mantine/core';

export default function MyInput({
  label,
  description,
  placeholder,
  inputWrapperOrder,
  type,
  required=false,
  disabled=false
}) {
  return (
    <>
    {type === "text" && <TextInput
        label={label}
        description={description}
        placeholder={placeholder}
        inputWrapperOrder={inputWrapperOrder}
        required={required}
        disabled={disabled}
      />}
    {type === "password" && 
      <PasswordInput
        label={label}
        description={description}
        placeholder={placeholder}
        inputWrapperOrder={inputWrapperOrder}
        required={required}
        disabled={disabled}
      />}
    </>
    )}