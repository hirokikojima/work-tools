import React, { FC, HTMLProps } from 'react'
import classNames from 'classnames'
import styles from './styles.module.scss'
import Balloon from '../../atoms/Balloon'
import { CircleButton } from '../../atoms/Button'
import HoverTipInteraction, { Tip } from "../../atoms/HoverTipInteraction";
import { Repeat2Icon } from '../../atoms/Icon'

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
        <Repeat2Icon height={40} width={40} onClick={ onClick } />
      </CircleButton>
      <Tip><Balloon>繰り返しする</Balloon></Tip>
    </HoverTipInteraction>
  )
}

export default DeleteButton