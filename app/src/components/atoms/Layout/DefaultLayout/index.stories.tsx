import React from 'react';
import { Story, Meta } from '@storybook/react';

import DefaultLayout, { LayoutHeader, LayoutSide, LayoutContent, LayoutFooter, Props } from './index';

export default {
  title: 'Example/DefaultLayout',
  component: DefaultLayout,
} as Meta;

export const Default: Story<Props> = () => (
  <DefaultLayout>
    <LayoutSide>
      side
    </LayoutSide>
    <LayoutHeader>
      header
    </LayoutHeader>
    <LayoutContent>
      main
    </LayoutContent>
    <LayoutFooter>
      footer
    </LayoutFooter>
  </DefaultLayout>
)