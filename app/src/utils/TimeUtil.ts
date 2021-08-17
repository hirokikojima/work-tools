export default {
  timeToSeconds: (timeStr: string): number => {
    const [_, hours, minutes, seconds] = timeStr.match(/([0-9]{2}):([0-9]{2}):?([0-9]{2})?/) || []
    
    if (!hours || !minutes) {
      return 0
    }

    return Number(hours) * 3600 + Number(minutes) * 60 + Number(seconds || '00')
  },

  secondsToTime: (secs: number): string => {
    const padZero = (num: number) => num.toString().padStart(2, '0')

    const hours = padZero(Math.floor(secs / 3600))
    const minutes = padZero(Math.floor(secs / 60 % 60))
    const seconds = padZero(Math.floor(secs % 60))


    return `${hours}:${minutes}:${seconds}`
  }
}