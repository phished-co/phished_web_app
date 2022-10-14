import Button from './Button';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Button',
  component: Button,
  argTypes: {},
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  type: 'primary',
  label: 'Button'
};

export const Secondary = Template.bind({});
Secondary.args = {
  ...Primary.args,
  type: 'secondary',
  label: 'Secondary'
};