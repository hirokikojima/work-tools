import Timer from './Timer'

export default class TimerSet {
  private timers: Timer[]
  private current: number

  constructor() {
    this.current = 0
  }

  addTimer(timer: Timer): TimerSet {
    this.timers = [...this.timers, timer]
    return this
  }

  removeTimer(index: number): TimerSet {
    this.timers = this.timers.filter((_, i) => i !== index)
    return this
  }

  start(): boolean {
    if (this.timers.length === 0) {
      return false
    }
  
    this.timers[this.current].start()
    return true
  }

  stop(): boolean {
    if (this.timers.length === 0) {
      return false
    }

    this.timers[this.current].stop()
    return true
  }

  hasNext(): boolean {
    return this.current + 1 > this.timers.length
  }

  next(): boolean {
    if (!this.hasNext()) {
      return false
    }

    this.current = this.current + 1
    return true
  }
}