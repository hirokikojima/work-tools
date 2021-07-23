import React, { FC, useReducer, useState } from 'react'
import TimerPageTemplate from '../templates/TimerPageTemplate'
import { start, stop } from '../../actions/TimerActionCreator'
import TimerReducer from '../../reducers/TimerReducer'
import Timer from '../../domains/models/Timer'

const TimerPage: FC = () => {

  // const initialState = {}
  // const [state, dispatch] = useReducer(TimerReducer, initialState)

  const [index, setIndex] = useState<number>(0)

  const [timers, setTimers] = useState<Timer[]>([
    new Timer(0),
    new Timer(60),
    new Timer(120),
  ])

  return (
    <TimerPageTemplate
      timers={timers}
      currentTimerIndex={index}
      onChangeTimer={(timer, seconds) => timer.setSeconds(seconds)}
      onClickStartTimer={(timer) => timer.start()}
      onClickStopTimer={(timer) => timer.stop()}
      onFinishTimer={() => {
        setIndex((index) => index < timers.length - 1 ? index + 1 : 0)
      }}
    />
  )
}

export default TimerPage