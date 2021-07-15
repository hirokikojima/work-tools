import React, { FC, HTMLProps } from 'react'
import classNames from 'classnames'
import styles from './styles.module.scss'

export type Props = HTMLProps<HTMLDivElement>

const Card: FC<Props> = (props: Props) => {
  const {
    className,
    children,
    ...rest
  } = props

  return (
    <div className={classNames([styles.card, className])} {...rest}>
      {children}
    </div>
  )
}

export default Card