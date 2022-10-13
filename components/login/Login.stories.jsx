import Login from './Login';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'mock/Login',
  component: Login,
  argTypes: {},
};

const Template = (args) => <Login {...args} />;

export const Base = Template.bind({});

Base.args = {
  SampleTextProp: 'hellow world',
};
