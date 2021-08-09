import React from 'react';
import { action } from '@storybook/addon-actions';
import { Story, Meta } from '@storybook/react';

import Button, { Props, DefaultButton, BlockButton, CircleButton, SuccessButton, WarningButton, DangerButton } from './index';

export default {
  title: 'Example/Button',
  component: Button,
} as Meta;

export const Normal: Story<Props> = () => <Button onClick={action('onClick!!')}>Button</Button>
export const Default: Story<Props> = () => <DefaultButton>Default</DefaultButton>
export const Block: Story<Props> = () => <BlockButton>Block</BlockButton>
export const Circle: Story<Props> = () => <CircleButton>Circle</CircleButton>
export const Success: Story<Props> = () => <SuccessButton>Success</SuccessButton>
export const Warning: Story<Props> = () => <WarningButton>Warning</WarningButton>
export const Danger: Story<Props> = () => <DangerButton>Danger</DangerButton>