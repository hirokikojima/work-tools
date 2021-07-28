import React, { FC } from 'react'
import { DefaultButton } from '../../atoms/Button'
import Card, { CardHeader, CardBody} from '../../atoms/Card'

import Timer from '../../../domains/models/Timer'
import TimerList from '../../organisms/TimerList'

export type Props = {
  timers: Timer[]
  onClickAddTimer: () => void
  onClickRemoveTimer: (timer: Timer) => void
  onChangeTimer: (timer: Timer, seconds: number) => void
  onClickStartTimer: () => void
  onClickStopTimer: () => void
  onFinishTimer: () => void
}

const TimerPageTemplate: FC<Props> = (props: Props) => {
  const {
    timers,
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
        <DefaultButton onClick={onClickStartTimer}>
          Start Timer
        </DefaultButton>
        <DefaultButton onClick={onClickStopTimer}>
          Stop Timer
        </DefaultButton>
        <DefaultButton onClick={onClickAddTimer}>
          Add Timer
        </DefaultButton>
      </CardHeader>
      <CardBody>
        <TimerList
          timers={timers}
          onChangeTimer={onChangeTimer}
          onClickRemoveTimer={onClickRemoveTimer}          
          onFinishTimer={onFinishTimer}
        />
      </CardBody>
    </Card>
  )
}

export default TimerPageTemplate