import Search from './Search';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Utility/Search',
  component: Search,
  argTypes: {
    onSendEmail: { action: 'sending email' },
  },
};

const Template = (args) => <Search {...args} />;

export const Base = Template.bind({});

Base.args = {};
