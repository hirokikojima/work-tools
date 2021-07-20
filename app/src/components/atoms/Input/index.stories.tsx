import React from 'react';
import { Story, Meta } from '@storybook/react';

import Input, { InputText, InputNumber, InputRange, Props } from './index';

export default {
  title: 'Example/Input',
  component: Input,
} as Meta;

export const Text: Story<Props> = () => <InputText />
export const Number: Story<Props> = () => <InputNumber />
export const Range: Story<Props> = () => <InputRange min="0" max="60" />