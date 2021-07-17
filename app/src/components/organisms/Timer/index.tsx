import React, { FC } from 'react'
import styles from './styles.module.scss'
import TimeUtil from '../../../utils/TimeUtil'

export type Props = {
  seconds: number
  onChangeSeconds: (seconds: number) => void
}

const Timer: FC<Props> = (props: Props) => {
  const {
    seconds,
    onChangeSeconds
  } = props

  const time = TimeUtil.secondsToTime(seconds)

  const onChange = (event: React.FocusEvent<HTMLInputElement>) => {
    onChangeSeconds(Number(event.target.value))
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