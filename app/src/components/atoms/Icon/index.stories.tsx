import React from 'react';
import { action } from '@storybook/addon-actions';
import { Story, Meta } from '@storybook/react';

import Icon, { IconProps as Props, AlarmIcon, ChevronRightIcon, PlayIcon, PlusIcon, RepeatIcon, Repeat2Icon, StopIcon, TrashCanIcon, TrashCan2Icon } from './index';

export default {
  title: 'Example/Icon',
  component: Icon,
} as Meta;

export const Alarm: Story<Props> = () => <AlarmIcon />
export const ChevronRight: Story<Props> = () => <ChevronRightIcon />
export const Play: Story<Props> = () => <PlayIcon />
export const Plus: Story<Props> = () => <PlusIcon />
export const Repeat: Story<Props> = () => <RepeatIcon />
export const Repeat2: Story<Props> = () => <Repeat2Icon />
export const Stop: Story<Props> = () => <StopIcon />
export const TrashCan: Story<Props> = () => <TrashCanIcon />
export const TrashCan2: Story<Props> = () => <TrashCan2Icon />
export const TrashCanWithOnClick: Story<Props> = () => <TrashCanIcon onClick={ action('Icon clicked!!') } />