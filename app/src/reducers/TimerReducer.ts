import { AddTimerAction, RemoveTimerAction, TimerCountDownAction, TimerNextAction, TimerResetAction, TimerStartAction, TimerStopAction } from "../actions/TimerActionCreator"
import { State } from '../contexts/TimerContext'

export type TimerActionType = 
  | AddTimerAction
  | RemoveTimerAction
  | TimerStartAction
  | TimerStopAction
  | TimerResetAction
  | TimerNextAction
  | TimerCountDownAction

export default (state: State, action: TimerActionType): State => {
  switch(action.type) {
    case 'add':
      return {
        timers: [...state.timers, action.payload.timer],
        index: state.index
      }
    case 'remove':
      return {
        timers: state.timers.filter(t => t !== action.payload.timer),
        index: state.index
      }
    case 'start':
      state.timers[state.index].start()
      return state
    case 'stop':
      state.timers[state.index].stop()
      return state
    case 'reset':
      state.timers[state.index].reset()
      return state
    case 'next': {
      const currentIndex = state.index
      const nextIndex = state.index < state.timers.length - 1 ? state.index + 1 : 0
      state.timers[currentIndex].stop()
      state.timers[nextIndex].start()
      return {
        timers: state.timers,
        index: nextIndex
      }
    }
    case 'countdown':
      return {
        timers: state.timers,
        index: state.index
      }
    default:
      return state
  }
}