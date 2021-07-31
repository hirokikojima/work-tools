import React, { FC, PropsWithChildren } from 'react'
import classNames from 'classnames'
import styles from './styles.module.scss'

export type Props = PropsWithChildren<{
  modifier?: 'default' | 'header' | 'sidebar'
}>

export const NavigationList: FC<Props> = (props: Props) => {
  const {
    children,
    modifier = 'default'
  } = props

  return (
    <ul className={classNames([styles.nav, styles[`nav__${modifier}`]])}>
      {children}
    </ul>
  )
}

export default NavigationList