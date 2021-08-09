import React, { FC } from 'react'
import { BlockButton } from '../../atoms/Button'
import Card, { CardBody} from '../../atoms/Card'
import DefaultLayout, { LayoutSide, LayoutHeader, LayoutContent } from '../../atoms/Layout/DefaultLayout'
import GlobalNavigation from '../../organisms/GlobalNavigation'
import Header from '../../organisms/Header'
import TimerList from '../../organisms/TimerList'

import Timer from '../../../domains/models/Timer'

import { withStyle } from '../../../utils/decorators'
import PlayButton from '../../molecules/PlayButton'
import StopButton from '../../molecules/StopButton'
import RepeatButton from '../../molecules/RepeatButton'

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
        {
          withStyle({
            padding: '12px'
          })(
            <div>
              <div>
                <PlayButton onClick={onClickStartTimer} />
                <StopButton onClick={onClickStopTimer} />
                <RepeatButton onClick={() => { alert('hogehoge') }} />
              </div>
              <Card>
                <CardBody>
                  <TimerList
                    timers={timers}
                    onChangeTimer={onChangeTimer}
                    onClickRemoveTimer={onClickRemoveTimer}          
                  />
                </CardBody>
              </Card>
              <div>
                <BlockButton onClick={onClickAddTimer}>
                  Add Timer
                </BlockButton>
              </div>
            </div>
          )
        }
      </LayoutContent>
    </DefaultLayout>
  )
}

export default TimerPageTemplate