import CardMetric from './CardMetric';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Templates/CardMetric',
  component: CardMetric,
  argTypes: {},
};

const Template = (args) => <Metric {...args} />;

export const Base = Template.bind({});

Base.args = {
  SampleTextProp: 'hellow world',
};
