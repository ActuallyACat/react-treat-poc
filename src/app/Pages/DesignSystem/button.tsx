import * as React from 'react';
import { Button } from '../../../components/Button';

export default () => (
  <>
    <Button fullWidth onClick={(e: React.SyntheticEvent) => console.log(e)}>Click me</Button>
    <Button primary onClick={(e: React.SyntheticEvent) => console.log(e)}>Click me</Button>
    <Button secondary onClick={(e: React.SyntheticEvent) => console.log(e)}>Click me</Button>
  </>
)