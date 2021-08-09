import React, { FC, HTMLProps } from 'react'
import classNames from 'classnames'
import styles from './styles.module.scss'
import Balloon from '../../atoms/Balloon'
import HoverTipInteraction, { Tip } from "../../atoms/HoverTipInteraction";
import { StopIcon } from '../../atoms/Icon'

export type Props = {
  onClick: () => void
} & HTMLProps<HTMLSpanElement>

const DeleteButton: FC<Props> = (props: Props) => {
  const {
    className,
    onClick,
    ...rest
  } = props
  
  return (
    <HoverTipInteraction className={ classNames([styles.root, className]) } { ...rest }>
      <StopIcon onClick={ onClick } />
      <Tip><Balloon>停止する</Balloon></Tip>
    </HoverTipInteraction>
  )
}

export default DeleteButton