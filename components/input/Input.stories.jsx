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
  label: "Email Address",
  description: "Please enter your email",
  placeholder: "example@email.com",
  inputWrapperOrder: ['label', 'description', 'error', 'input']
};
