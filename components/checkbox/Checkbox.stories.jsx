import Checkboxx from './Checkbox';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Checkboxx',
  component: Checkboxx,
  argTypes: {},
};

const Template = (args) => <Checkboxx {...args} />;

export const Base = Template.bind({});

Base.args = {
  SampleTextProp: 'hellow world',
};
