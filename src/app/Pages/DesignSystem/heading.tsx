import * as React from 'react';
import { Heading } from '../../../components/Typography';

export default () => (
  <>
    <Heading as="h1" size="xl">h1 with a large size</Heading>
    <Heading size="lg">h1 with a medium size</Heading>
    <Heading size="md">h1 with a medium size</Heading>
    <Heading size="sm">This is a heading</Heading>
    <Heading size="xs">This is a heading</Heading>
  </>
)