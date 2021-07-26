import React, { FC } from 'react'
import styles from './styles.module.scss'
import TimerModel from '../../../domains/models/Timer'
import TimeUtil from '../../../utils/TimeUtil'
import useTimer from './useTimer'

export type Props = {
  timer: TimerModel
  onChangeTimer: (timer: TimerModel, seconds: number) => void
  onFinishTimer: (timer: TimerModel) => void
}

const Timer: FC<Props> = (props: Props) => {
  const {
    timer,
    onChangeTimer,
    onFinishTimer
  } = props

  // const { seconds } = useTimer(timer, onFinishTimer)

  const time = TimeUtil.secondsToTime(timer.current)

  const onChange = (event: React.FocusEvent<HTMLInputElement>) => {
    onChangeTimer(timer, Number(event.target.value))
  }

  return (
    <div className={styles.timer}>
      <div className={styles.timer_left}>
        {TimeUtil.formatTime(time)}
      </div>
      <div className={styles.timer_right}>
        <input onBlur={onChange} />
      </div>
    </div>
  )
}

export default Timer