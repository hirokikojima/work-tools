import React, { FC } from 'react'
import { DefaultButton } from '../../atoms/Button'
import Card, { CardHeader, CardBody} from '../../atoms/Card'
import DefaultLayout, { LayoutSide, LayoutHeader, LayoutContent } from '../../atoms/Layout/DefaultLayout'
import GlobalNavigation from '../../organisms/GlobalNavigation'
import Header from '../../organisms/Header'

import Timer from '../../../domains/models/Timer'
import TimerList from '../../organisms/TimerList'

import { withStyle } from '../../../utils/decorators'

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
              <Card>
                <CardHeader>
                  <DefaultButton onClick={onClickStartTimer}>
                    Start Timer
                  </DefaultButton>
                  <DefaultButton onClick={onClickStopTimer}>
                    Stop Timer
                  </DefaultButton>
                  <DefaultButton onClick={onClickAddTimer}>
                    Add Timer
                  </DefaultButton>
                </CardHeader>
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