export type ListenerType = 'start' | 'stop' | 'reset' | 'countdown' | 'finish'
export type ListenerFunction = () => void
export type Listeners = {
  [key in ListenerType]?: ListenerFunction
}

export default class Timer {
  public audio: HTMLAudioElement
  public seconds: number
  public current: number
  private listeners: Listeners
  private worker: Worker | null

  constructor(audio: HTMLAudioElement, seconds = 0) {
    this.audio = audio
    this.seconds = seconds
    this.current = seconds
    this.listeners = {}
    this.worker = null
  }

  setSeconds(seconds: number): Timer {
    this.seconds = seconds
    this.current = seconds
    return this;
  }

  addEventListener(listenerType: ListenerType, listenerFunction: ListenerFunction): Timer {
    this.listeners[listenerType] = listenerFunction
    return this
  }

  start(): void {
    if (!this.worker) {
      this.worker = new Worker('/work-tools/js/worker.js')
      this.worker.onmessage = (message: MessageEvent<number>) => {
        this.current = message.data
        this.callListener('countdown')

        if (this.current <= 0) {
          this.stop()
          this.reset()
          this.playAudio()
          this.callListener('finish')
        }
      }
      this.worker.postMessage(this.current)
      this.callListener('start')
    }
  }

  stop(): void {
    if (this.worker) {
      this.worker.terminate()
      this.worker = null
      this.callListener('stop')
    }
  }

  reset(): void {
    this.current = this.seconds;
    this.callListener('reset')
  }

  playAudio(): void {
    this.audio.play()
  }

  private callListener(listenerType: ListenerType) {
    switch(listenerType) {
      case 'start':
        this.listeners['start'] && this.listeners['start']()
        break;
      case 'stop':
        this.listeners['stop'] && this.listeners['stop']()
        break;
      case 'reset':
        this.listeners['reset'] && this.listeners['reset']()
        break;
      case 'countdown' :
        this.listeners['countdown'] && this.listeners['countdown']()
        break;
      case 'finish':
        this.listeners['finish'] && this.listeners['finish']()
        break;
    }
  }
}
