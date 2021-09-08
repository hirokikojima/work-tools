import React from 'react';
import { action } from '@storybook/addon-actions';
import { Story, Meta } from '@storybook/react';

import TimerModal from '../../../libs/Timer'
import Timer, { Props } from './index';

export default {
  title: 'Example/Timer',
  component: Timer,
} as Meta;

export const Default: Story<Props> = () => {
  const audio = new Audio('/work-tools/files/wav_chime1.wav')
  audio.load()
  
  const timer = new TimerModal(audio, 120)

  return (
    <Timer
      timer={timer}
      onChangeTimer={action('onChangeTimer')}
      onClickRemoveTimer={action('onClickRemoveTimer')}
    />
  )
}