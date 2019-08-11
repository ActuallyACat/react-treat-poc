import * as React from 'react';
import { Button } from '../Button';
import { space } from '../Spacing';

const NavbarItem: React.SFC = ({ children }: {children: React.ReactNode}) => {
  return <li style={{padding: space('xs')}}><Button>{children}</Button></li>;
}

export default NavbarItem;