import PhishForm from './PhishForm';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Utility/PhishForm',
  component: PhishForm,
  argTypes: {
    onSendEmail: { action: 'sending email' },
  },
};

const Template = (args) => <PhishForm {...args} />;

export const Base = Template.bind({});

Base.args = {};
