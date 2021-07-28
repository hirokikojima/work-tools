import { createContext } from 'react'
import Timer from '../domains/models/Timer'

export type State = {
  timers: Timer[],
  index: number
}

export default createContext({
  state: {
    timers: [],
    index: 0
  },
  dispatch: null
})