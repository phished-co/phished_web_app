import Header from './Header';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Templates/Header',
  component: Header,
  argTypes: {},
};

const Template = (args) => <Header {...args} />;

export const Base = Template.bind({});

Base.args = {
  SampleTextProp: 'hellow world',
};
