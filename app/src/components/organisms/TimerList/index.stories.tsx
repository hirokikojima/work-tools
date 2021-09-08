import React from 'react';
import { action } from '@storybook/addon-actions';
import { Story, Meta } from '@storybook/react';

import TimerModel from '../../../libs/Timer'
import TimerList, { Props } from './index';

export default {
  title: 'Example/TimerList',
  component: TimerList,
} as Meta;



export const Default: Story<Props> = () => {
  const audio = new Audio('/work-tools/files/wav_chime1.wav')
  audio.load()
  
  const timers = [
    new TimerModel(audio, 0),
    new TimerModel(audio, 60),
    new TimerModel(audio, 120)
  ]
  
  return (
    <TimerList
      timers={timers}
      onChangeTimer={action('onChangeTimer')}
      onClickRemoveTimer={action('onClickRemoveTimer')}
    />
  )
}