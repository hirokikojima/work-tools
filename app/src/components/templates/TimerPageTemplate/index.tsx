import React, { FC } from 'react'
import { DefaultButton } from '../../atoms/Button'
import Card, { CardHeader, CardBody} from '../../atoms/Card'
import Timer from '../../organisms/Timer'

export type Props = {
  seconds: number
  onChangeTimer: (seconds: number) => void
  onClickStartTimer: () => void
  onClickStopTimer: () => void
}

const TimerPageTemplate: FC<Props> = (props: Props) => {
  const {
    seconds,
    onClickStartTimer,
    onClickStopTimer,
    onChangeTimer
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
      </CardHeader>
      <CardBody>
        <Timer
          seconds={seconds}
          onChangeSeconds={onChangeTimer}
        />
      </CardBody>
    </Card>
  )
}

export default TimerPageTemplate