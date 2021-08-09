import classNames from 'classnames'
import React, { FC, HTMLProps, PropsWithChildren } from 'react'
import styles from './styles.module.scss'

export type Props = PropsWithChildren<HTMLProps<HTMLSpanElement>>

const Balloon: FC<Props> = (props: Props) => {
  const {
    children,
    className,
    ...rest    
  } = props
  
  return (
    <span className={ classNames([styles.balloon, className]) } { ...rest }>
      { children }
    </span>
  )
}

export default Balloon