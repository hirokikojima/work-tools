import React, { FC, HTMLProps } from 'react'
import classNames from 'classnames'
import styles from './styles.module.scss'
import Balloon from '../../atoms/Balloon'
import HoverTipInteraction, { Tip } from "../../atoms/HoverTipInteraction";
import { PlayIcon } from '../../atoms/Icon'

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
      <PlayIcon onClick={ onClick } />
      <Tip><Balloon>再生する</Balloon></Tip>
    </HoverTipInteraction>
  )
}

export default DeleteButton