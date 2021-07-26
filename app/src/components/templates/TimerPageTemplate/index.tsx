import React, { FC } from 'react'
import { DefaultButton } from '../../atoms/Button'
import Card, { CardHeader, CardBody} from '../../atoms/Card'

import Timer from '../../../domains/models/Timer'
import TimerList from '../../organisms/TimerList'

export type Props = {
  timers: Timer[]
  currentTimerIndex: number
  onClickAddTimer: () => void
  onClickRemoveTimer: (timer: Timer) => void
  onChangeTimer: (timer: Timer, seconds: number) => void
  onClickStartTimer: (timer: Timer) => void
  onClickStopTimer: (timer: Timer) => void
  onFinishTimer: (timer: Timer) => void
}

const TimerPageTemplate: FC<Props> = (props: Props) => {
  const {
    timers,
    currentTimerIndex,
    onClickAddTimer,
    onClickRemoveTimer,
    onChangeTimer,
    onClickStartTimer,
    onClickStopTimer,
    onFinishTimer,
  } = props
  
  return (
    <Card>
      <CardHeader>
        <DefaultButton onClick={() => onClickStartTimer(timers[currentTimerIndex])}>
          Start Timer
        </DefaultButton>
        <DefaultButton onClick={() => onClickStopTimer(timers[currentTimerIndex])}>
          Stop Timer
        </DefaultButton>
        <DefaultButton onClick={() => onClickAddTimer()}>
          Add Timer
        </DefaultButton>
        <DefaultButton onClick={() => onClickRemoveTimer(timers[currentTimerIndex])}>
          Remove Timer
        </DefaultButton>
      </CardHeader>
      <CardBody>
        <TimerList
          timers={timers}
          onChangeTimer={onChangeTimer}
          onFinishTimer={onFinishTimer}
        />
      </CardBody>
    </Card>
  )
}

export default TimerPageTemplate