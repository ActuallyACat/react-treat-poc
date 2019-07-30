import React from 'react';
import { TreatProvider } from 'react-treat';

import theme from './theme.treat.js';
import { Button } from './components/Button';

export const App = () => (
  <TreatProvider theme={theme}>
    yay this works
    <Button>Yay</Button>
  </TreatProvider>
);
