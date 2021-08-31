import React, { FC } from 'react'
import styles from './styles.module.scss'
import { InputTime } from '../../atoms/Input'
import DeleteButton from '../../molecules/DeleteButton'
import TimerModel from '../../../libs/Timer'
import TimeUtil from '../../../utils/TimeUtil'

export type Props = {
  timer: TimerModel
  onChangeTimer: (timer: TimerModel, seconds: number) => void
  onClickRemoveTimer: (timer: TimerModel) => void
}

const Timer: FC<Props> = (props: Props) => {
  const {
    timer,
    onChangeTimer,
    onClickRemoveTimer,
  } = props

  const currentStr = TimeUtil.secondsToTime(timer.current)
  const secondsStr = TimeUtil.secondsToTime(timer.seconds)

  const onChange = (event: React.FocusEvent<HTMLInputElement>) => {
    onChangeTimer(timer, TimeUtil.timeToSeconds(event.target.value))
  }

  return (
    <div className={styles.timer}>
        <span className={styles.current}>{currentStr}</span>
        <div className={styles.form}>
          <InputTime step="1" onBlur={onChange} defaultValue={secondsStr} />
          <DeleteButton className={styles.deleteButton} onClick={() => onClickRemoveTimer(timer)} />
        </div>
    </div>
  )
}

export default Timer