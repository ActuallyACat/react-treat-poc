import * as React from 'react';
import { useStyles } from 'react-treat';
import * as styleRefs from './Card.treat';
import * as typographyStyleRefs from '../Typography/Typography.treat';
import { DefaultComponentProps } from '../Utils';

export interface CardProps extends DefaultComponentProps {
  as?: 'div',
  children: React.ReactNode,
}

export const Card = ({
  as='div',
  children,
  className,
  ...otherProps
}: CardProps) => {
  const cardStyles = useStyles(styleRefs);
  const typographyStyles = useStyles(typographyStyleRefs);
  return React.createElement(as, {
    className: `${cardStyles.base} ${typographyStyles.bodyBase} ${className}`,
    ...otherProps
  }, children);
}
