import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';

import TimerPageTemplate, { Props } from './index';
import Timer from '../../../domains/models/Timer';
import EventEmitter from '../../../libs/EventEmitter';

export default {
  title: 'Example/TimerPageTemplate',
  component: TimerPageTemplate,
} as Meta;

const timer = new Timer(3600)

export const Default: Story<Props> = () => {
  const [seconds, setSeconds] = useState<number>(0)

  const eventEmitter = new EventEmitter<number>()
  eventEmitter.on(setSeconds)

  timer.setEventEmitter(eventEmitter)

  return (
    <TimerPageTemplate
      seconds={seconds}
      onChangeTimer={(seconds: number) => timer.setSeconds(seconds)}
      onClickStartTimer={() => timer.start()}
      onClickStopTimer={() => timer.stop()}
    />
  )
}