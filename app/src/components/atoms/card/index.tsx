import React, { FC, HTMLProps, ReactChildren } from 'react'
import classNames from 'classnames'
import styles from './styles.module.scss'
import useMapProps from '../../../hooks/useMapParts'

export type Props = {
  cardHeaderClassName?: string,
  cardBodyClassName?: string,
  cardFooterClassName?: string,
} & HTMLProps<HTMLDivElement>

const Card: FC<Props> = (props: Props) => {
  const {
    cardHeaderClassName,
    cardBodyClassName,
    cardFooterClassName,
    className,
    children,
    ...rest
  } = props

  const [header, body, footer] = useMapProps([
    CardHeader,
    CardBody,
    CardFooter
  ], children)

  return (
    <div className={classNames([styles.card, className])} {...rest}>
      {
        (() => {
          if (header) {
            return (
              <div className={classNames([styles.card_header, cardHeaderClassName])}>
                {header}
              </div>
            )
          }
        })()
      }

      {
        (() => {
          if (body) {
            return (
              <div className={classNames([styles.card_body, cardBodyClassName])}>
                {body}
              </div>
            )
          }
        })()
      }

      {
        (() => {
          if (footer) {
            return (
              <div className={classNames([styles.card_footer, cardFooterClassName])}>
                {footer}
              </div>
            )
          }
        })()
      }
    </div>
  )
}

export default Card

export type ChildProps = {
  children: ReactChildren
}

export const CardHeader: FC = () => <span>This is hidden component.</span>
export const CardBody: FC = () => <span>This is hidden component.</span>
export const CardFooter: FC = () => <span>This is hidden component.</span>