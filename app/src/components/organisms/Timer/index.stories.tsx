import React from 'react';
import { action } from '@storybook/addon-actions';
import { Story, Meta } from '@storybook/react';

import TimerModal from '../../../libs/Timer'
import Timer, { Props } from './index';

export default {
  title: 'Example/Timer',
  component: Timer,
} as Meta;

export const Default: Story<Props> = () => (
  <Timer
    timer={new TimerModal(120)}
    onChangeTimer={action('onChangeTimer')}
    onClickRemoveTimer={action('onClickRemoveTimer')}
  />
)