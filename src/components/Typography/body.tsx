import * as React from 'react';
import { useStyles } from 'react-treat';
import classNames from 'classnames';
import * as styleRefs from './Typography.treat';

export interface BodyProps extends React.AriaAttributes {
  as?: 'p',
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl',
  children: React.ReactNode
}

export const Body = ({
  as = 'p', 
  size = 'md',
  children,
  ...otherProps
}: BodyProps) => {
  const styles = useStyles(styleRefs);
  const className = classNames(styles.bodyBase, styles.bodySizeVariants[size]);

  return React.createElement(as, {
    className,
    ...otherProps
  }, children);
}