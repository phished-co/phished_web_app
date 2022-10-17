import Cards from './Cards';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Cards',
  component: Cards,
  argTypes: {},
};

const Template = (args) => <Cards {...args} />;

export const Base = Template.bind({});

Base.args = {};
