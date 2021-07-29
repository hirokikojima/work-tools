import React, { FC, HTMLProps, PropsWithChildren, ReactChildren } from 'react'
import classNames from 'classnames'
import styles from './styles.module.scss'
import useMapParts from '../../../../hooks/useMapParts'

export type Props = PropsWithChildren<HTMLProps<HTMLDivElement>>

const DefaultLayout: FC<Props> = (props: Props) => {
  const {
    className,
    children,
    ...rest
  } = props

  const [ side, header, content, footer ] = useMapParts([
    LayoutSide,
    LayoutHeader,
    LayoutContent,
    LayoutFooter
  ], children)

  return (
    <div className={classNames([styles.root, className])} {...rest}>
      {
        (() => (
          side && <div className={styles.side}>
            {side}
          </div>
        ))()
      }
      <div className={styles.main}>
        {
          (() => (
            header && <div className={styles.main_header}>
              {header}
            </div>
          ))()
        }
        {
          (() => (
            content && <div className={styles.main_content}>
              {content}
            </div>
          ))()
        }
        {
          (() => (
            footer && <div className={styles.main_footer}>
              {footer}
            </div>
          ))()
        }
      </div>
    </div>
  )
}

export default DefaultLayout

export type ChildProps = {
  children: ReactChildren
}

export const LayoutHeader: FC = () => <span>This is hidden component.</span>
export const LayoutSide: FC = () => <span>This is hidden component.</span>
export const LayoutContent: FC = () => <span>This is hidden component.</span>
export const LayoutFooter: FC = () => <span>This is hidden component.</span>