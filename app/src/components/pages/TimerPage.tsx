import React, { FC, useReducer, useState } from 'react'
import TimerPageTemplate from '../templates/TimerPageTemplate'
import { addTimer, removeTimer, start, stop, countdown } from '../../actions/TimerActionCreator'
import TimerReducer from '../../reducers/TimerReducer'
import Timer from '../../domains/models/Timer'
import EventEmitter from '../../libs/EventEmitter'

const TimerPage: FC = () => {

  const initialState = { timers: [] }
  const [state, dispatch] = useReducer(TimerReducer, initialState)

  const [index, setIndex] = useState<number>(0)

  const handleAddTimer = () => {
    const timer = new Timer(0)

    const eventEmitter = new EventEmitter<number>()
    eventEmitter.on(() => {
      console.log('aaa')
      countdown(dispatch)
    })

    timer.setEventEmitter(eventEmitter)
    console.log(timer)
    addTimer(dispatch, timer)
  }

  const handleUpdateTimer = (timer: Timer, seconds: number) => {
    // TODO
  }

  const handleRemoveTimer = (timer: Timer) => {
    removeTimer(dispatch, timer)
  }

  return (
    <TimerPageTemplate
      timers={state.timers}
      currentTimerIndex={index}
      onClickAddTimer={() => handleAddTimer()}
      onClickRemoveTimer={(timer) => handleRemoveTimer(timer)}
      onChangeTimer={(timer, seconds) => timer.setSeconds(seconds)}
      onClickStartTimer={(timer) => timer.start()}
      onClickStopTimer={(timer) => timer.stop()}
      onFinishTimer={() => {
        setIndex((index) => index < state.timers.length - 1 ? index + 1 : 0)
      }}
    />
  )
}

export default TimerPage