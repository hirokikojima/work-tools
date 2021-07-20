/* eslint-disable react/display-name */
import React, { FC, HTMLProps } from 'react'
import classNames from 'classnames'
import styles from './styles.module.scss'

export type Props = HTMLProps<HTMLInputElement>

const Input: FC<Props> = (props: Props) => {
  const {
    className,
    ...rest
  } = props
  
  return (
        <input className={classNames([styles.Input, className])} {...rest} />
  )
}

export default Input

const inputFactory = (type: string, className: string) => (props: Props) => {
  return (
    <Input { ...props } type={type} className={styles[className]} />
  )
}

export const InputText = inputFactory('text', 'input_text')
export const InputNumber = inputFactory('number', 'input_number')
export const InputRange = inputFactory('range', 'input_range')