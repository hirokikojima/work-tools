import React, { FC, HTMLProps, PropsWithChildren, ReactNode } from 'react'
import classNames from 'classnames'
import styles from './styles.module.scss'

export type Props = PropsWithChildren<HTMLProps<HTMLSpanElement>>

const HoverTipInteraction: FC<Props> = (props: Props) => {
  const {
    children,
    className,
    ...rest
  } = props
  
  const newChildren = React.Children.map(children, child => {
    if (!React.isValidElement(child)) {
      return null
    }

    const grandChild = child.props.children

    switch(child.type) {
      case Tip:
        return React.cloneElement(grandChild, {
          className: classNames([
            styles.tip,
            grandChild.props.className
          ])
        })
      case Marker:
        return React.cloneElement(grandChild, {
          className: classNames([
            styles.maker,
            grandChild.props.className
          ])
        })
      default:
        return child

    }
  })

  return (
    <span className={classNames([styles.root, className])} {...rest}>
      {newChildren}
    </span>
  )
}

export default HoverTipInteraction

export type ChildProps = {
  children?: ReactNode | undefined;
}

export const Tip = (props: ChildProps) => <span>This is hidden component.</span>
export const Marker = (props: ChildProps) => <span>This is hidden component.</span>