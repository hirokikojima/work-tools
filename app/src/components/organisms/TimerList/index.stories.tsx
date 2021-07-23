import React from 'react';
import { action } from '@storybook/addon-actions';
import { Story, Meta } from '@storybook/react';

import TimerModel from '../../../domains/models/Timer'
import TimerList, { Props } from './index';

export default {
  title: 'Example/TimerList',
  component: TimerList,
} as Meta;



export const Default: Story<Props> = () => (
  <TimerList
    timers={[new TimerModel(0), new TimerModel(60), new TimerModel(120)]}
    onChangeTimer={action('onChangeTimer')}
    onFinishTimer={action('onFinishTimer')}
  />
)