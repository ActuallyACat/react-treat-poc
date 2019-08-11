import * as React from 'react';
import { resolveStyles } from 'treat';
import classNames from 'classnames';
import * as NavStylesRefs from './Nav.treat';
import { Heading } from '../Typography/heading';
import { theme } from '../Theme/theme.treat';
import NavbarItem from './NavbarItem';

export interface NavbarProps {
  children?: React.ReactNode;
}

class Navbar extends React.Component<NavbarProps> {
  public static Item = NavbarItem;

  render() {
    const { children } = this.props;
    const navStyles = resolveStyles(theme, NavStylesRefs);
    const className = classNames(
      navStyles.defaultVariant,
    );

    return (
      <nav className={className}>
        <Heading size="md">Demo Project</Heading>
        {React.Children.count(children) > 0 && (
          <ul className={navStyles.resetList}>
            {children}
          </ul>
        )}
      </nav>
    );
  }
}

export const Nav = Navbar;