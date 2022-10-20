import Calendar from './Calendar';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Utility/Calendar',
  component: Calendar,
  argTypes: {
    onSetDate: { action: 'selecting date' },
  },
};

const Template = (args) => <Calendar {...args} />;

export const Base = Template.bind({});

Base.args = {};