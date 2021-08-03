import React, { FC, HTMLProps, PropsWithChildren } from 'react'
import classNames from 'classnames'
import styles from './styles.module.scss'

export type Props = PropsWithChildren<{
  modifier?: 'default' | 'header' | 'sidebar'
}> & HTMLProps<HTMLLIElement>

export const NavigationItem: FC<Props> = (props: Props) => {
  const {
    children,
    modifier = 'default',
    ...rest
  } = props

  return (
    <li className={classNames([styles.nav_item, styles[`nav_item__${modifier}`]])} {...rest}>
      {children}
    </li>
  )
}

export default NavigationItem