import React from 'react';
import { Story, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import PlayButton, { Props } from '.';
import { withStyle } from '../../../utils/decorators';

export default {
  title: 'Example/PlayButton',
  component: PlayButton,
} as Meta;

export const Default: Story<Props> = () => (withStyle({ margin: '50px' })(
    <PlayButton onClick={ action('再生ボタンがクリックされました') } />
))