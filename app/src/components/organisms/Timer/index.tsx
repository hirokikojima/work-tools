import React, { FC } from 'react'
import styles from './styles.module.scss'
import { TrashCanIcon } from '../../atoms/Icon'
import TimerModel from '../../../domains/models/Timer'
import TimeUtil from '../../../utils/TimeUtil'

export type Props = {
  timer: TimerModel
  onChangeTimer: (timer: TimerModel, seconds: number) => void
  onClickRemoveTimer: (timer: TimerModel) => void
  onFinishTimer: (timer: TimerModel) => void
}

const Timer: FC<Props> = (props: Props) => {
  const {
    timer,
    onChangeTimer,
    onClickRemoveTimer,
    onFinishTimer
  } = props

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
        <TrashCanIcon onClick={() => onClickRemoveTimer(timer)} />
      </div>
    </div>
  )
}

export default Timer