import React from 'react';
import { action } from '@storybook/addon-actions';
import { Story, Meta } from '@storybook/react';

import TimerList, { Props } from './index';

export default {
  title: 'Example/TimerList',
  component: TimerList,
} as Meta;

export const Default: Story<Props> = () => (
  <TimerList
    secondsList={[0, 60, 120]}
    onChangeSeconds={action('onChanged!!')}
  />
)