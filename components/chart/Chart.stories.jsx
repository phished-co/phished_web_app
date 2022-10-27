import Chart from './Chart';

// eslint-disable-next-line import/no-anonymous-default-export
import { categories, chartdata, cardmetrics } from "../../data/fake_data"

export default {
  title: 'Tremor/Chart',
  component: Chart,
  argTypes: {},
};

const Template = (args) => <Chart {...args} categories={cardmetrics} />;

export const Base = Template.bind({});

Base.args = {
  SampleTextProp: 'hellow world',
};
