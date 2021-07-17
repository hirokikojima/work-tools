import React from 'react';
import { action } from '@storybook/addon-actions';
import { Story, Meta } from '@storybook/react';

import Timer, { Props } from './index';

export default {
  title: 'Example/Timer',
  component: Timer,
} as Meta;

export const Default: Story<Props> = () => (
  <Timer
    seconds={1234}
    onChangeSeconds={action('onChanged!!')}
  />
)