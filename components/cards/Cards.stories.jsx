import Cards from './Cards';
import { categories, chartdata, cardmetrics } from "../chart/fake_data"
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Tremor/Cards',
  component: Cards,
  argTypes: {},
};

const Template = (args) => <Cards {...args} categories={cardmetrics} />;

export const Base = Template.bind({});

Base.args = {};
