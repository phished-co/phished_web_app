import BaseTemplate from './BaseTemplate';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Templates/BaseTemplate',
  component: BaseTemplate,
  argTypes: {},
};

const Template = (args) => <BaseTemplate {...args} />;

export const Base = Template.bind({});

Base.args = {
  SampleTextProp: 'hellow world',
};
