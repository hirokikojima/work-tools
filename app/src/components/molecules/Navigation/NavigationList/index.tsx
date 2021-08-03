import React, { FC, HTMLProps, PropsWithChildren } from 'react'
import classNames from 'classnames'
import styles from './styles.module.scss'

export type Props = PropsWithChildren<{
  modifier?: 'default' | 'header' | 'sidebar'
}> & HTMLProps<HTMLUListElement>

export const NavigationList: FC<Props> = (props: Props) => {
  const {
    children,
    modifier = 'default',
    ...rest
  } = props

  return (
    <ul className={classNames([styles.nav, styles[`nav__${modifier}`]])} {...rest}>
      {children}
    </ul>
  )
}

export default NavigationList