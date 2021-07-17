import { Timer } from '../types/index'

export default {
  timeToSeconds: (time: Timer.Time): number => {
    const hourSeconds = time.hours * 3600
    const minutesSeconds = time.minutes * 60
    const seconds = time.seconds

    return hourSeconds + minutesSeconds + seconds
  },

  secondsToTime: (seconds: number): Timer.Time => {
    const _hours = Math.floor(seconds / 3600);
    const _minutes = Math.floor(seconds / 60 % 60);
    const _seconds = Math.floor(seconds % 60);

    return {
      hours: _hours,
      minutes: _minutes,
      seconds: _seconds
    }
  },

  formatTime: (time: Timer.Time): string => {
    const f = (num: number) => ( '00' + num ).slice( -2 );
    
    return `${f(time.hours)}:${f(time.minutes)}:${f(time.seconds)}`
  }
}