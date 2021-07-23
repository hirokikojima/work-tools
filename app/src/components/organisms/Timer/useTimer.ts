
import React, { useEffect, useState } from "react"
import Timer from '../../../domains/models/Timer'
import EventEmitter from "../../../libs/EventEmitter"

export type ReturnUseTimer = {
  seconds: number
}

const useTimer = (timer: Timer, onFinishTimer: (timer: Timer) => void): ReturnUseTimer => {
  const [seconds, setSeconds] = useState(timer.seconds)

  useEffect(() => {
    const handler = (seconds: number) => {
      setSeconds(seconds)
      if (seconds === 0) onFinishTimer(timer)
    }

    const eventEmitter = new EventEmitter<number>()
    eventEmitter.on(handler)

    timer.setEventEmitter(eventEmitter)

    return () => {
      eventEmitter.off(handler)
    }
  }, [])

  return {
    seconds
  }
}

export default useTimer