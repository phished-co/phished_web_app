import MyButton from './Button';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'MyButton',
  component: MyButton,
  argTypes: {},
};

const Template = (args) => <MyButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  color: "blue",
  variant: "fill",
  size: "md",
  txt: "Button",
};

export const Disabled = Template.bind({});
Disabled.args = {
  txt: "Button",
  disabled: true,
};

export const Outlined = Template.bind({});
Outlined.args = {
  color: "blue",
  variant: "outline",
  size: "md",
  txt: "Outlined",
};

export const Lighter = Template.bind({});
Lighter.args = {
  variant: "light",
  size: "md",
  txt: "Lighter",
};