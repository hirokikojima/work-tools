type CountDownCallback = (seconds: number) => void

export default class Timer {
  private seconds: number
  private intervalId?: number
  private countDownCallback?: CountDownCallback

  constructor(seconds = 0) {
    this.seconds = seconds
  }

  getSeconds(): number {
    return this.seconds
  }

  setSeconds(seconds: number): Timer {
    this.seconds = seconds
    return this
  }

  setCountDownCallback(countDownCallback: CountDownCallback): Timer {
    this.countDownCallback = countDownCallback
    return this
  }

  reset(): Timer {
    this.seconds = 0
    return this
  }

  start(): void {
    console.log(this.intervalId)
    if (!this.intervalId) {
      this.intervalId = window.setInterval(() => this.countDown(), 1000)
    }
  }

  stop(): void {
    if (this.intervalId) {
      window.clearInterval(this.intervalId)
      this.intervalId = undefined
    }
  }

  private countDown() {
    this.seconds = this.seconds - 1
    
    if (this.countDownCallback) {
      this.countDownCallback(this.seconds)
    }

    if (this.seconds <= 0) {
      this.stop()
    }
  }
}