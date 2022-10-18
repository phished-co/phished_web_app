import Metric from './Metric';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Templates/Metric',
  component: Metric,
  argTypes: {},
};

const Template = (args) => <Metric {...args} />;

export const Base = Template.bind({});

Base.args = {
  SampleTextProp: 'hellow world',
};
