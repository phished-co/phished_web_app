import CardMetric from './CardMetric';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Tremor/CardMetric',
  component: CardMetric,
  argTypes: {},
};

const Template = (args) => <CardMetric {...args} />;

export const Base = Template.bind({});

Base.args = {
  SampleTextProp: 'hellow world',
};
