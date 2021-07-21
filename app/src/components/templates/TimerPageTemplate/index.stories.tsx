import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';

import TimerPageTemplate, { Props } from './index';
import Timer from '../../../domains/models/Timer';
import EventEmitter from '../../../libs/EventEmitter';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Example/TimerPageTemplate',
  component: TimerPageTemplate,
} as Meta;

export const Default: Story<Props> = () => {
  return (
    <TimerPageTemplate
      secondsList={[0, 60, 120]}
      onChangeTimerList={action('onChangeTimer!!')}
      onClickStartTimer={action('onClickStartTimer!!')}
      onClickStopTimer={action('onClickStopTimer!!')}
    />
  )
}