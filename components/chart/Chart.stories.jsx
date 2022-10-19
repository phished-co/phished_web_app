import Chart from './Chart';
import Cards from "../cards/Cards";

// eslint-disable-next-line import/no-anonymous-default-export
import { categories, chartdata, cardmetrics } from "./fake_data"

export default {
  title: 'Dashboard/Chart',
  component: Chart,
  argTypes: {},
};

const Template = (args) => <Chart {...args} categories={cardmetrics} />;

export const Base = Template.bind({});

Base.args = {
  SampleTextProp: 'hellow world',
};
