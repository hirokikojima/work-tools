import { TimerCountDownAction, TimerResetAction, TimerStartAction, TimerStopAction } from "../actions/TimerActionCreator"
import { State } from '../contexts/TimerContext'

export type TimerActionType = 
    TimerStartAction
  | TimerStopAction
  | TimerResetAction
  | TimerCountDownAction

export default (state: State, action: TimerActionType): State => {
  switch(action.type) {
    case 'start':
    case 'stop':
    case 'reset':
    case 'countdown':
    default:
      return state
  }
}