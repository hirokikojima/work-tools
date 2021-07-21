import React, { FC } from 'react'
import classNames from 'classnames'
import styles from './styles.module.scss'
import Timer from '../Timer'

export type Props = {
  secondsList: number[]
  onChangeSeconds: (seconds: number, index: number) => void
}

const TimerList: FC<Props> = (props: Props) => {
  const {
    secondsList,
    onChangeSeconds
  } = props

  return (
    <div>
      {
        secondsList.map((seconds, index) => (
          <Timer
            key={index}
            seconds={seconds}
            onChangeSeconds={(seconds) => onChangeSeconds(seconds, index)}
          />
        ))
      }
    </div>
  )
}

export default TimerList