import React from 'react';
import { Story, Meta } from '@storybook/react';
import { withStyle } from '../../../utils/decorators';

import HoverTipInteraction, { Marker, Props, Tip } from './index';


export default {
  title: 'Example/HoverTipInteraction',
  component: HoverTipInteraction,
} as Meta;

const decoratorsStyle = {
  display: 'inline-block',
  margin: '50px'
}

export const Primary: Story<Props> = () => withStyle(decoratorsStyle)(
  <HoverTipInteraction>
    <span>Example text.</span>
    <Tip><span>This is tip text.</span></Tip>
  </HoverTipInteraction>
)

export const Secondary: Story<Props> = () => withStyle(decoratorsStyle)(
  <HoverTipInteraction>
    <Marker><span>This is Marker text.</span></Marker>
    <Tip><span>This is tip text.</span></Tip>
  </HoverTipInteraction>
)
