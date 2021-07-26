import { AddTimerAction, RemoveTimerAction, TimerCountDownAction, TimerResetAction, TimerStartAction, TimerStopAction } from "../actions/TimerActionCreator"
import { State } from '../contexts/TimerContext'

export type TimerActionType = 
  | AddTimerAction
  | RemoveTimerAction
  | TimerStartAction
  | TimerStopAction
  | TimerResetAction
  | TimerCountDownAction

export default (state: State, action: TimerActionType): State => {
  switch(action.type) {
    case 'add':
      return {
        timers: [...state.timers, action.payload.timer]
      }
    case 'remove':
      return {
        timers: state.timers.filter(t => t !== action.payload.timer)
      }
    case 'start':
    case 'stop':
    case 'reset':
    case 'countdown':
      return {
        timers: state.timers
      }
    default:
      return state
  }
}