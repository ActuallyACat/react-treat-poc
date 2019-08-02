import React from 'react';
import { TreatProvider } from 'react-treat';

import theme from './common/theme.treat.js';
import { Button } from './components/Button';
import { Body, Heading } from './components/Typography';

export const App = () => {
  return (
    <TreatProvider theme={theme}>
      <Body>This is a Body</Body>
      <Body>This is a Body</Body>
      <Body>This is a Body</Body>
      <Body>This is a Body</Body>
      <Body>This is a Body</Body>
      <Heading as="h1">This is a heading</Heading>
      <Heading as="h2">This is a heading</Heading>
      <Heading as="h3">This is a heading</Heading>
      <Heading as="h4">This is a heading</Heading>
      <Heading as="h5">This is a heading</Heading>
      <Heading as="h6">This is a heading</Heading>
      <Button onClick={(e) => console.log(e)}>Yay</Button>
    </TreatProvider>
  );
}