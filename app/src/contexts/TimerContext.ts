import { createContext } from 'react'
import Timer from '../domains/models/Timer'

export type State = {
  timers: Timer[]
}

export default createContext({
  state: {
    timers: []
  },
  dispatch: null
})