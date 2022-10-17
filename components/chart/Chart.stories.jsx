import Chart from './Chart';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Dashboard/Chart',
  component: Chart,
  argTypes: {},
};

const Template = (args) => <Chart {...args} />;

export const Base = Template.bind({});

Base.args = {
  SampleTextProp: 'hellow world',
};
