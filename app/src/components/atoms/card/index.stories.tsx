import React from 'react';
import { Story, Meta } from '@storybook/react';
import { withStyle } from '../../../utils/decorators'

import Card, { Props } from './index';

export default {
  title: 'Example/Card',
  component: Card,
} as Meta;

const styles = {
  margin: '12px',
  padding: '12px'
}

export const Default: Story<Props> = () => (
  withStyle(styles)(
    <Card>
      <h1>Heading...</h1>
      <p>
        sample text.sample text.sample text.<br/>
        sample text.sample text.sample text.<br/>
        sample text.sample text.sample text.
      </p>
    </Card>
  )
)