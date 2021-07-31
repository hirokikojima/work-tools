import React from 'react';
import { action } from '@storybook/addon-actions';
import { Story, Meta } from '@storybook/react';

import NavigationList, { Props as NavigationProps } from './NavigationList/index';
import NavigationItem, { Props as _ } from './NavigationItem/index';

export default {
  title: 'Example/Navigation',
  component: NavigationList,
} as Meta;

export const Default: Story<NavigationProps> = () => (
  <NavigationList>
    <NavigationItem>Menu1</NavigationItem>
    <NavigationItem>Menu2</NavigationItem>
    <NavigationItem>Menu3</NavigationItem>
  </NavigationList>
)

export const Header: Story<NavigationProps> = () => (
  <NavigationList modifier={'header'}>
    <NavigationItem modifier={'header'}>Menu1</NavigationItem>
    <NavigationItem modifier={'header'}>Menu2</NavigationItem>
    <NavigationItem modifier={'header'}>Menu3</NavigationItem>
  </NavigationList>
)

export const Sidebar: Story<NavigationProps> = () => (
  <NavigationList modifier={'sidebar'}>
    <NavigationItem modifier={'sidebar'}>Menu1</NavigationItem>
    <NavigationItem modifier={'sidebar'}>Menu2</NavigationItem>
    <NavigationItem modifier={'sidebar'}>Menu3</NavigationItem>
  </NavigationList>
)