import React, { FC } from 'react'
import classNames from 'classnames'
import styles from './styles.module.scss'
import TimerModel from '../../../domains/models/Timer'
import Timer from '../Timer'

export type Props = {
  timers: TimerModel[]
  onChangeTimer: (timer: TimerModel, seconds: number) => void
  onClickRemoveTimer: (timer: TimerModel) => void
  onFinishTimer: (timer: TimerModel) => void
}

const TimerList: FC<Props> = (props: Props) => {
  const {
    timers,
    onChangeTimer,
    onClickRemoveTimer,
    onFinishTimer
  } = props

  return (
    <div>
      {
        timers.map((timer, index) => (
          <Timer
            key={index}
            timer={timer}
            onChangeTimer={(timer, seconds) => onChangeTimer(timer, seconds)}
            onClickRemoveTimer={(timer) => onClickRemoveTimer(timer)}
            onFinishTimer={(timer) => onFinishTimer(timer)}
          />
        ))
      }
    </div>
  )
}

export default TimerList