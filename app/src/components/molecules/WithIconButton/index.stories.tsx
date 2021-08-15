import React from 'react';
import { Story, Meta } from '@storybook/react';

import { BlockButtonWithPlusIcon, DefaultButtonWithPlusIcon, Props } from './index';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Example/WithIconButton',
  component: DefaultButtonWithPlusIcon,
} as Meta;

export const DefaultWithPlusIcon: Story<Props> = () => <DefaultButtonWithPlusIcon onClick={action('onClick')}>追加する</DefaultButtonWithPlusIcon>
export const BlockWithPlusIcon: Story<Props> = () => <BlockButtonWithPlusIcon onClick={action('onClick')}>追加する</BlockButtonWithPlusIcon>