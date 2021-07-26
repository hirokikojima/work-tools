import { Dispatch } from "react"
import Timer from "../domains/models/Timer"

export type AddTimerAction = {
  type: 'add',
  payload: {
    timer: Timer
  }
}
export type RemoveTimerAction = {
  type: 'remove',
  payload: {
    timer: Timer
  }
}
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

export const addTimer = (dispatch: Dispatch<AddTimerAction>, timer: Timer): void => {
  const action: AddTimerAction = {
    type: 'add',
    payload: {
      timer: timer
    }
  }
  dispatch(action)
}

export const removeTimer = (dispatch: Dispatch<RemoveTimerAction>, timer: Timer): void => {
  const action: RemoveTimerAction = {
    type: 'remove',
    payload: {
      timer: timer
    }
  }
  dispatch(action)
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