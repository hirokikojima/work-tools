import { Dispatch } from "react"

export type TimerStartAction = {
  type: 'start',
}
export type TimerStopAction = {
  type: 'stop',
}
export type TimerResetAction = {
  type: 'reset',
}
export type TimerCountDownAction = {
  type: 'countdown',
}

export const start = (dispatch: Dispatch<TimerStartAction>): void => {
  const action: TimerStartAction = {
    type: 'start',
  }
  dispatch(action)
}

export const stop = (dispatch: Dispatch<TimerStopAction>): void => {
  const action: TimerStopAction = {
    type: 'stop',
  }
  dispatch(action)
}

export const reset = (dispatch: Dispatch<TimerResetAction>): void => {
  const action: TimerResetAction = {
    type: 'reset',
  }
  dispatch(action)
}

export const countdown = (dispatch: Dispatch<TimerCountDownAction>): void => {
  const action: TimerCountDownAction = {
    type: 'countdown',
  }
  dispatch(action)
}