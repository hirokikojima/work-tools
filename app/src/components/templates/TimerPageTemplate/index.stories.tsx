import React from 'react';
import { Story, Meta } from '@storybook/react';

import TimerPageTemplate, { Props } from './index';
import TimerModel from '../../../libs/Timer';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Example/TimerPageTemplate',
  component: TimerPageTemplate,
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
    <TimerPageTemplate
      timers={timers}
      onClickAddTimer={action('onClickAddTimer')}
      onClickRemoveTimer={action('onClickRemoveTimer')}
      onChangeTimer={action('onChangeTimer')}
      onClickStartTimer={action('onClickStartTimer')}
      onClickStopTimer={action('onClickStopTimer')}
    />
  )
}