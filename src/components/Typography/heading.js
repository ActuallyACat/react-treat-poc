import React from 'react';
import { useStyles } from 'react-treat';
import * as styleRefs from './typography.treat';

export const Heading = ({
  as = 'h1', 
  s = 'md',
  children,
  ...otherProps
}) => {
  const styles = useStyles(styleRefs);

  return React.createElement(as, { ...otherProps, className: styles.headingBase }, children);
}