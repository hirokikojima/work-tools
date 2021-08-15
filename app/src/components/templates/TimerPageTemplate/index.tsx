import React, { FC } from 'react'
import { BlockButton } from '../../atoms/Button'
import Card, { CardBody} from '../../atoms/Card'
import DefaultLayout, { LayoutSide, LayoutHeader, LayoutContent } from '../../atoms/Layout/DefaultLayout'
import GlobalNavigation from '../../organisms/GlobalNavigation'
import Header from '../../organisms/Header'
import TimerList from '../../organisms/TimerList'

import Timer from '../../../domains/models/Timer'

import PlayButton from '../../molecules/PlayButton'
import StopButton from '../../molecules/StopButton'
import RepeatButton from '../../molecules/RepeatButton'
import styles from './styles.module.scss'
import { PlusIcon } from '../../atoms/Icon'
import { withStyle } from '../../../utils/decorators'
import { BlockButtonWithPlusIcon } from '../../molecules/WithIconButton'

export type Props = {
  timers: Timer[]
  onClickAddTimer: () => void
  onClickRemoveTimer: (timer: Timer) => void
  onChangeTimer: (timer: Timer, seconds: number) => void
  onClickStartTimer: () => void
  onClickStopTimer: () => void
}

const TimerPageTemplate: FC<Props> = (props: Props) => {
  const {
    timers,
    onClickAddTimer,
    onClickRemoveTimer,
    onChangeTimer,
    onClickStartTimer,
    onClickStopTimer,
  } = props
  
  return (
    <DefaultLayout>
      <LayoutSide>
        <GlobalNavigation />
      </LayoutSide>
      <LayoutHeader>
        <Header />
      </LayoutHeader>
      <LayoutContent>
        <div className={styles['container']}>
          <div className={styles['container-button']}>
            <PlayButton onClick={onClickStartTimer} />
            <StopButton onClick={onClickStopTimer} />
            <RepeatButton onClick={() => { alert('hogehoge') }} />
          </div>
          <Card className={styles['container-timer']}>
            <CardBody>
              <TimerList
                timers={timers}
                onChangeTimer={onChangeTimer}
                onClickRemoveTimer={onClickRemoveTimer}          
              />
            </CardBody>
          </Card>
          <div>
            <BlockButtonWithPlusIcon onClick={onClickAddTimer}>
              追加する
            </BlockButtonWithPlusIcon>
          </div>
        </div>
      </LayoutContent>
    </DefaultLayout>
  )
}

export default TimerPageTemplate