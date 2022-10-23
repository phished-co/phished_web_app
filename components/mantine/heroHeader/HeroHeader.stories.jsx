import HeroHeader from './HeroHeader';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Templates/HeroHeader',
  component: HeroHeader,
  argTypes: {},
};

const Template = (args) => <HeroHeader {...args} />;

export const Base = Template.bind({});

Base.args = {
  SampleTextProp: 'hellow world',
};
