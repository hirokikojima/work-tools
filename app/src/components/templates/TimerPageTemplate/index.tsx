import React, { FC } from 'react'
import { DefaultButton } from '../../atoms/Button'
import Card, { CardHeader, CardBody} from '../../atoms/Card'
import TimerList from '../../organisms/TimerList'

export type Props = {
  secondsList: number[]
  onChangeTimerList: (seconds: number, index: number) => void
  onClickStartTimer: () => void
  onClickStopTimer: () => void
}

const TimerPageTemplate: FC<Props> = (props: Props) => {
  const {
    secondsList,
    onChangeTimerList,
    onClickStartTimer,
    onClickStopTimer,
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
        <TimerList
          secondsList={secondsList}
          onChangeSeconds={onChangeTimerList}
        />
      </CardBody>
    </Card>
  )
}

export default TimerPageTemplate