import React from 'react';
import { Story, Meta } from '@storybook/react';

import Balloon, { Props } from './index';

export default {
  title: 'Example/Balloon',
  component: Balloon,
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<Props> = (args) => <Balloon {...args}>Example Text.</Balloon>;

export const Primary = Template.bind({});

Primary.args = {};

export const Secondary = Template.bind({});

Secondary.args = {
  style: {
    position: 'absolute',
    top: '200px',
    left: '200px',
  }
};