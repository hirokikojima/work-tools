import React, { FC, useEffect, useReducer } from 'react'
import TimerPageTemplate from '../templates/TimerPageTemplate'
import { addTimer, removeTimer, start, stop, next, countdown } from '../../actions/TimerActionCreator'
import TimerContext from '../../contexts/TimerContext'
import TimerReducer from '../../reducers/TimerReducer'
import Timer from '../../libs/Timer'

const TimerPage: FC = () => {

  const initialState = { timers: [], index: 0 }
  const [state, dispatch] = useReducer(TimerReducer, initialState)

  const handleAddTimer = () => {
    const audio = new Audio('/work-tools/files/chime1.wav')
    audio.load()

    const timer = new Timer(audio, 60)

    timer.addEventListener('countdown', () => {
      countdown(dispatch)
    })

    timer.addEventListener('finish', () => {
      next(dispatch)
    })
    
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

  useEffect(() => {
    handleAddTimer()
  }, [])

  return (
    <TimerContext.Provider value={{ state, dispatch }}>
      <TimerPageTemplate
        timers={state.timers}
        onClickAddTimer={handleAddTimer}
        onClickRemoveTimer={(timer) => handleRemoveTimer(timer)}
        onChangeTimer={(timer, seconds) => timer.setSeconds(seconds)}
        onClickStartTimer={handleStartTimer}
        onClickStopTimer={handleStopTimer}
      />
    </TimerContext.Provider>
  )
}

export default TimerPage