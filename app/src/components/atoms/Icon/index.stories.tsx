import React from 'react';
import { action } from '@storybook/addon-actions';
import { Story, Meta } from '@storybook/react';

import Icon, { IconProps as Props, AlarmIcon, ChevronRightIcon, RepeatIcon, TrashCanIcon } from './index';

export default {
  title: 'Example/Icon',
  component: Icon,
} as Meta;

export const Alarm: Story<Props> = () => <AlarmIcon />
export const ChevronRight: Story<Props> = () => <ChevronRightIcon />
export const Repeat: Story<Props> = () => <RepeatIcon />
export const TrashCan: Story<Props> = () => <TrashCanIcon />
export const TrashCanWithOnClick: Story<Props> = () => <TrashCanIcon onClick={ action('Icon clicked!!') } />