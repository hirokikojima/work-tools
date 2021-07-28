import React, { FC, useReducer } from 'react'
import TimerPageTemplate from '../templates/TimerPageTemplate'
import { addTimer, removeTimer, start, stop, next, countdown } from '../../actions/TimerActionCreator'
import TimerReducer from '../../reducers/TimerReducer'
import Timer from '../../domains/models/Timer'
import EventEmitter from '../../libs/EventEmitter'

const TimerPage: FC = () => {

  const initialState = { timers: [], index: 0 }
  const [state, dispatch] = useReducer(TimerReducer, initialState)

  const handleAddTimer = () => {
    const timer = new Timer(0)

    const eventEmitter = new EventEmitter<number>()
    eventEmitter.on((seconds) => {
      countdown(dispatch)
      if (seconds === 0) next(dispatch)
    })
    timer.setEventEmitter(eventEmitter)
    
    addTimer(dispatch, timer)
  }

  const handleUpdateTimer = (timer: Timer, seconds: number) => {
    // TODO
  }

  const handleRemoveTimer = (timer: Timer) => {
    removeTimer(dispatch, timer)
  }

  const handleStartTimer = () => {
    start(dispatch)
  }

  const handleStopTimer = () => {
    stop(dispatch)
  }

  const handleNextTimer = () => {
    next(dispatch)
  }

  return (
    <TimerPageTemplate
      timers={state.timers}
      onClickAddTimer={handleAddTimer}
      onClickRemoveTimer={(timer) => handleRemoveTimer(timer)}
      onChangeTimer={(timer, seconds) => timer.setSeconds(seconds)}
      onClickStartTimer={handleStartTimer}
      onClickStopTimer={handleStopTimer}
      onFinishTimer={handleNextTimer}
    />
  )
}

export default TimerPage