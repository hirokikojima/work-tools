import React, { FC } from 'react'
import classNames from 'classnames'
import styles from './styles.module.scss'
import TimerModel from '../../../domains/models/Timer'
import Timer from '../Timer'

export type Props = {
  timers: TimerModel[]
  onChangeTimer: (timer: TimerModel, seconds: number) => void
  onFinishTimer: (timer: TimerModel) => void
}

const TimerList: FC<Props> = (props: Props) => {
  const {
    timers,
    onChangeTimer,
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
            onFinishTimer={(timer) => onFinishTimer(timer)}
          />
        ))
      }
    </div>
  )
}

export default TimerList