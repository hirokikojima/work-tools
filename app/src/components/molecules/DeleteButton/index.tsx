import React, { FC, HTMLProps } from 'react'
import classNames from 'classnames'
import styles from './styles.module.scss'
import Balloon from '../../atoms/Balloon'
import HoverTipInteraction, { Tip } from "../../atoms/HoverTipInteraction";
import { TrashCan2Icon } from '../../atoms/Icon'

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
      <TrashCan2Icon onClick={ onClick } />
      <Tip><Balloon>削除する</Balloon></Tip>
    </HoverTipInteraction>
  )
}

export default DeleteButton