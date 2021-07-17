/* eslint-disable @typescript-eslint/no-namespace */
export namespace Timer {
  export type Timer = {
    time: Time
  }
  export type Time = {
    hours: number
    minutes: number
    seconds: number
  }
}