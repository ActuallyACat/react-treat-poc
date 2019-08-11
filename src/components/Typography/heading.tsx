import * as React from 'react';
import { useStyles } from 'react-treat';
import classNames from 'classnames';
import * as styleRefs from './typography.treat';

export interface HeadingProps extends React.AriaAttributes {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p',
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl',
  children: React.ReactNode
}

export const Heading = ({
  as = 'h1', 
  size = 'md',
  children,
  ...otherProps
}: HeadingProps) => {
  const styles = useStyles(styleRefs);
  const className = classNames(styles.headingBase, styles.headingSizeVariants[size]);

  return React.createElement(as, {
    className,
    ...otherProps
  }, children);
}