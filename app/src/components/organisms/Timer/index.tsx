import React, { FC } from 'react'
import styles from './styles.module.scss'
import { InputText } from '../../atoms/Input'
import DeleteButton from '../../molecules/DeleteButton'
import TimerModel from '../../../domains/models/Timer'
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

  const time = TimeUtil.secondsToTime(timer.current)

  const onChange = (event: React.FocusEvent<HTMLInputElement>) => {
    onChangeTimer(timer, Number(event.target.value))
  }

  return (
    <div className={styles.timer}>
        <span className={styles.current}>{TimeUtil.formatTime(time)}</span>
        <div className={styles.form}>
          <InputText onBlur={onChange} />
          <DeleteButton className={styles.deleteButton} onClick={() => onClickRemoveTimer(timer)} />
        </div>
    </div>
  )
}

export default Timer