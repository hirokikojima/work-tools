import React from 'react';
import { Story, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import StopButton, { Props } from '.';
import { withStyle } from '../../../utils/decorators';

export default {
  title: 'Example/StopButton',
  component: StopButton,
} as Meta;

export const Default: Story<Props> = () => (withStyle({ margin: '50px' })(
    <StopButton onClick={ action('停止ボタンがクリックされました') } />
))