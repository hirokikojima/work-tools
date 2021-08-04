/* eslint-disable react/display-name */
import React, { FC, HTMLProps } from 'react'
import classNames from 'classnames'
import styles from './styles.module.scss'

import svgAlarm from '../../../assets/img/icons/alarm.svg'
import svgChevronRight from '../../../assets/img/icons/chevron-right.svg'
import svgPlay from '../../../assets/img/icons/play.svg'
import svgPlus from '../../../assets/img/icons/plus.svg'
import svgRepeat from '../../../assets/img/icons/repeat.svg'
import svgRepeat2 from '../../../assets/img/icons/repeat_2.svg'
import svgStop from '../../../assets/img/icons/stop.svg'
import svgTrashCan from '../../../assets/img/icons/trash-can.svg'
import svgTrashCan2 from '../../../assets/img/icons/trash-can_2.svg'

export type Props = {
  onClick?: () => void
} & HTMLProps<HTMLImageElement>

type CrossOriginType = "" | "anonymous" | "use-credentials" | undefined

const Icon: FC<Props> = (props: Props) => {
  const {
    height = 20,
    width = 20,
    className,
    crossOrigin,
    onClick,
    ...rest
  } = props

  const newProps = {
    height,
    width,
    className: onClick ? classNames([styles.clickable, className]) : className,
    crossOrigin: crossOrigin as CrossOriginType,
    onClick,
    ...rest
  }
  return (
    <img { ...newProps } />
  )
}

export default Icon

export type IconProps = Omit<Props, 'src'>

const iconFactory = (src: string) => (props: IconProps) => {
  return (
    <Icon { ...props } src={ src } />
  )
}


export const AlarmIcon = iconFactory(svgAlarm)
export const ChevronRightIcon = iconFactory(svgChevronRight)
export const PlayIcon = iconFactory(svgPlay)
export const PlusIcon = iconFactory(svgPlus)
export const RepeatIcon = iconFactory(svgRepeat)
export const Repeat2Icon = iconFactory(svgRepeat2)
export const StopIcon = iconFactory(svgStop)
export const TrashCanIcon = iconFactory(svgTrashCan)
export const TrashCan2Icon = iconFactory(svgTrashCan2)