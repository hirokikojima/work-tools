/* eslint-disable react/display-name */
import React, { ElementType, FC } from 'react'
import { BlockButton, DefaultButton, Props as ButtonProps } from '../../atoms/Button'
import styles from './styles.module.scss'
import { PlusIcon } from '../../atoms/Icon'

export type Props = ButtonProps
export type FactoryProps = {
  buttonTag: ElementType
  iconTag: ElementType
}

function WithIconButtonFactory({buttonTag: ButtonTag, iconTag: IconTag}: FactoryProps): FC<ButtonProps> {
  return (props: ButtonProps) => {
    const {
      className,
      children,
      ...rest
    } = props

    return (
      <ButtonTag className={styles.withIconButton} {...rest}>
        <IconTag className={styles['withIconButton-icon']} />
        {children}
      </ButtonTag>
    )
  }
}

export const DefaultButtonWithPlusIcon = WithIconButtonFactory({buttonTag: DefaultButton, iconTag: PlusIcon})
export const BlockButtonWithPlusIcon = WithIconButtonFactory({buttonTag: BlockButton, iconTag: PlusIcon})