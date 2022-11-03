import ProgressBar from './ProgressBar';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'ProgressBar',
  component: ProgressBar,
  argTypes: {},
};

const Template = (args) => <ProgressBar {...args} />;

export const Base = Template.bind({});

Base.args = {
  SampleTextProp: 'hellow world',
};
