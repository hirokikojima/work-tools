import React from 'react';
import { Story, Meta } from '@storybook/react';
import { withStyle } from '../../../utils/decorators'

import Card, { CardBody, CardFooter, CardHeader, Props } from './index';

export default {
  title: 'Example/Card',
  component: Card,
} as Meta;

const styles = {
  padding: '12px'
}

export const Default: Story<Props> = () => (
  <Card>
    <CardHeader>
      {
        withStyle(styles)(
          <h1>Heading...</h1>
        )
      }
    </CardHeader>
    <CardBody>
      {
        withStyle(styles)(
          <p>
            sample text.sample text.sample text.<br/>
            sample text.sample text.sample text.<br/>
            sample text.sample text.sample text.
          </p>
        )
      }
    </CardBody>
    <CardFooter>
      {
        withStyle(styles)(
          <p>Footer...</p>
        )
      }
    </CardFooter>
  </Card>
)

export const OnlyHeader: Story<Props> = () => (
  <Card>
    <CardHeader>
      {
        withStyle(styles)(
          <h1>Heading...</h1>
        )
      }
    </CardHeader>
  </Card>
)