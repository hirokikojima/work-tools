type Handler<T> = (event: T) => void

export default class EventEmitter<T> {
  private handlers: Handler<T>[] = []

  on(handler: Handler<T>): EventEmitter<T> {
    this.handlers.push(handler)
    return this
  }

  off(handler: Handler<T>): EventEmitter<T> {
    this.handlers.filter(h => h !== handler)
    return this
  }

  emit(event: T): void {
    this.handlers.forEach(handler => handler(event))
  }
}