import * as React from 'react';
import styled from 'styled-components';
import { space } from '../../components/Spacing';

const Container = styled.section`
  max-width: 700px;
  padding: ${space('md')};
  margin: 0 auto;
`;

const Template = ({ children }: {children: React.ReactNode}) => (
  <Container>
    {children}
  </Container>
);

export default Template;