import React, { FC, HTMLProps } from 'react'
import classNames from 'classnames'
import styles from './styles.module.scss'
import Balloon from '../../atoms/Balloon'
import { CircleButton } from '../../atoms/Button'
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
      <CircleButton>
        <StopIcon height={40} width={40} onClick={ onClick } />
      </CircleButton>
      <Tip><Balloon>停止する</Balloon></Tip>
    </HoverTipInteraction>
  )
}

export default DeleteButton