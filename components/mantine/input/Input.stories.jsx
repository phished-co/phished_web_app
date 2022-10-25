import MyInput from './Input';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'MyInput',
  component: MyInput,
  argTypes: {},
};

const Template = (args) => <MyInput {...args} />;

export const Email = Template.bind({});
Email.args = {
  type: "text",
  label: "Email Address",
  description: "Please enter your email",
  placeholder: "example@email.com",
  inputWrapperOrder: ['label', 'description', 'error', 'input'],
  required: true
};

export const Password = Template.bind({});
Password.args = {
  type: "password",
  label: "Password",
  description: "Please enter your password",
  placeholder: "password",
  inputWrapperOrder: ['label', 'description', 'error', 'input'],
  required: true
};

export const FirstName = Template.bind({});
FirstName.args = {
  type: "text",
  label: "First Name",
  description: "Please enter your First Name",
  placeholder: "First Name",
  inputWrapperOrder: ['label', 'description', 'error', 'input'],
  required: true
};

export const LastName = Template.bind({});
LastName.args = {
  type: "text",
  label: "Last Name",
  description: "Please enter your Last Name",
  placeholder: "Last Name",
  inputWrapperOrder: ['label', 'description', 'error', 'input'],
  required: true
};

export const RegText = Template.bind({});
RegText.args = {
  type: "text",
  inputWrapperOrder: ['label', 'description', 'error', 'input'],
};

export const Disabled = Template.bind({});
Disabled.args = {
  type: "text",
  disabled: true,
};
