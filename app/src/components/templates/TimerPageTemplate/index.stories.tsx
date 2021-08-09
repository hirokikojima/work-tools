import React from 'react';
import { Story, Meta } from '@storybook/react';

import TimerPageTemplate, { Props } from './index';
import TimerModel from '../../../domains/models/Timer';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Example/TimerPageTemplate',
  component: TimerPageTemplate,
} as Meta;

export const Default: Story<Props> = () => {
  return (
    <TimerPageTemplate
      timers={[new TimerModel(0), new TimerModel(60), new TimerModel(120)]}
      onClickAddTimer={action('onClickAddTimer')}
      onClickRemoveTimer={action('onClickRemoveTimer')}
      onChangeTimer={action('onChangeTimer')}
      onClickStartTimer={action('onClickStartTimer')}
      onClickStopTimer={action('onClickStopTimer')}
    />
  )
}