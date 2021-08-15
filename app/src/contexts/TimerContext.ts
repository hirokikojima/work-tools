import { createContext } from 'react'
import Timer from '../domains/models/Timer'
import { TimerAction } from '../reducers/TimerReducer'

export type State = {
  timers: Timer[],
  index: number
}

export type TimerContext = {
  state: State,
  dispatch: React.Dispatch<TimerAction>
}

export default createContext({} as TimerContext)