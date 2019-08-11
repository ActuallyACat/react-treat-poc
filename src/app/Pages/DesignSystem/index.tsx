import * as React from 'react';
import { Heading } from '../../../components/Typography';
import BodyExample from './body';
import ButtonExample from './button';
import HeadingExample  from './heading';
import CardExample from './card';
import Template from '../template';

export class DesignSystem extends React.Component {
  render() {
    return (
      <Template>
        <Heading size="lg">Headings</Heading>
        <HeadingExample />
        <hr />
        <Heading size="lg">Body</Heading>
        <BodyExample />
        <hr/>
        <Heading size="lg">Buttons</Heading>
        <ButtonExample />
        <hr/>
        <Heading size="lg">Cards</Heading>
        <CardExample />
      </Template>
    );
  }
}
