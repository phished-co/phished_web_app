import MyInput from './Input';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'MyInput',
  component: MyInput,
  argTypes: {},
};

const Template = (args) => <MyInput {...args} />;

export const Base = Template.bind({});

Base.args = {
  SampleTextProp: 'hellow world',
};
