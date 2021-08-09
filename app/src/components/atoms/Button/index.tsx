/* eslint-disable react/display-name */
import React, { FC, HTMLProps, PropsWithChildren } from 'react'
import classNames from 'classnames'
import styles from './styles.module.scss'

export type Props = PropsWithChildren<{
  type?: 'button' | 'submit' | 'reset'
}> & HTMLProps<HTMLButtonElement>

const Button: FC<Props> = (props: Props) => {
  const {
    children,
    className,
    ...rest
  } = props

  return (
    <button className={classNames([styles.button, className])} {...rest}>
      {children}
    </button>
  )
}

export default Button

const buttonFactory = (className: string) => (props: Props) => {
  return (
    <Button { ...props } className={styles[className]} />
  )
}

export const DefaultButton = buttonFactory('button_default')
export const CircleButton = buttonFactory('button_circle')
export const BlockButton = buttonFactory('button_block')
export const SuccessButton = buttonFactory('button_success')
export const WarningButton = buttonFactory('button_warning')
export const DangerButton = buttonFactory('button_danger')