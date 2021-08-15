import React, { FC, HTMLProps } from 'react'
import classNames from 'classnames'
import styles from './styles.module.scss'
import Balloon from '../../atoms/Balloon'
import { CircleButton } from '../../atoms/Button'
import HoverTipInteraction, { Tip } from "../../atoms/HoverTipInteraction";
import { Repeat2Icon } from '../../atoms/Icon'

export type Props = {
  height?: number
  width?: number
  onClick: () => void
} & HTMLProps<HTMLSpanElement>

const DeleteButton: FC<Props> = (props: Props) => {
  const {
    className,
    height = 50,
    width = 50,
    onClick,
    ...rest
  } = props
  
  return (
    <HoverTipInteraction className={ classNames([styles.root, className]) } { ...rest }>
      <CircleButton>
        <Repeat2Icon height={height} width={width} onClick={ onClick } />
      </CircleButton>
      <Tip><Balloon>繰り返しする</Balloon></Tip>
    </HoverTipInteraction>
  )
}

export default DeleteButton