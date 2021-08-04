import React, { FC } from 'react'
import { DefaultButton } from '../../atoms/Button'
import Card, { CardHeader, CardBody} from '../../atoms/Card'
import DefaultLayout, { LayoutSide, LayoutHeader, LayoutContent } from '../../atoms/Layout/DefaultLayout'
import GlobalNavigation from '../../organisms/GlobalNavigation'
import Header from '../../organisms/Header'
import TimerList from '../../organisms/TimerList'

import Timer from '../../../domains/models/Timer'

import { withStyle } from '../../../utils/decorators'
import { PlayIcon, StopIcon } from '../../atoms/Icon'

export type Props = {
  timers: Timer[]
  onClickAddTimer: () => void
  onClickRemoveTimer: (timer: Timer) => void
  onChangeTimer: (timer: Timer, seconds: number) => void
  onClickStartTimer: () => void
  onClickStopTimer: () => void
  onFinishTimer: () => void
}

const TimerPageTemplate: FC<Props> = (props: Props) => {
  const {
    timers,
    onClickAddTimer,
    onClickRemoveTimer,
    onChangeTimer,
    onClickStartTimer,
    onClickStopTimer,
    onFinishTimer,
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
        {
          withStyle({
            padding: '12px'
          })(
            <div>
              <DefaultButton onClick={onClickStartTimer}>
                <PlayIcon />
              </DefaultButton>
              <DefaultButton onClick={onClickStopTimer}>
                <StopIcon />
              </DefaultButton>
              <DefaultButton onClick={onClickAddTimer}>
                Add Timer
              </DefaultButton>
              <Card>
                <CardBody>
                  <TimerList
                    timers={timers}
                    onChangeTimer={onChangeTimer}
                    onClickRemoveTimer={onClickRemoveTimer}          
                    onFinishTimer={onFinishTimer}
                  />
                </CardBody>
              </Card>
            </div>
          )
        }
      </LayoutContent>
    </DefaultLayout>
  )
}

export default TimerPageTemplate