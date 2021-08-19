import EventEmitter from "../../libs/EventEmitter";

export default class Timer {
  public seconds: number;
  public current: number;
  private intervalId?: number;
  private worker?: Worker
  private eventEmitter?: EventEmitter<number>;

  constructor(seconds = 0) {
    this.seconds = seconds;
    this.current = seconds;
    this.eventEmitter?.emit(this.current)
  }

  setSeconds(seconds: number): Timer {
    this.seconds = seconds
    this.current = seconds
    this.eventEmitter?.emit(this.current)
    return this;
  }

  setEventEmitter(eventEmitter: EventEmitter<number>): Timer {
    this.eventEmitter = eventEmitter;
    return this;
  }

  start(): void {
    // if (!this.intervalId) {
    //   this.intervalId = window.setInterval(() => this.countDown(), 1000);
    // }

    if (!this.worker) {
      this.worker = new Worker('/work-tools/worker.js')
      this.worker.addEventListener('message', () => {this.countDown(); console.log('aaa')})
      this.worker.postMessage(this.current)
    }
  }

  stop(): void {
    // if (this.intervalId) {
    //   window.clearInterval(this.intervalId);
    //   this.intervalId = undefined;
    // }

    if (this.worker) {
      this.worker.terminate()
      this.worker = undefined
    }
  }

  reset(): void {
    this.current = this.seconds;
    this.eventEmitter?.emit(this.current)
  }

  private countDown() {
    this.current = this.current - 1;
    this.eventEmitter?.emit(this.current)

    if (this.current <= 0) {
      this.stop()
      this.reset()
    }
  }
}
