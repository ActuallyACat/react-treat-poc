import * as React from 'react';
import { useStyles } from 'react-treat';
import classNames from 'classnames';
import * as styleRefs from './Button.treat';
import { DefaultComponentProps } from '../Utils';

export interface ButtonProps extends DefaultComponentProps {
  as?: string,
  href?: string,
  children: React.ReactNode,
  fullWidth?: boolean,
  primary?: boolean,
  secondary?: boolean,
  onClick?: (e: React.SyntheticEvent) => void
}

export const Button = ({
  as='button',
  href='',
  children, 
  primary, 
  secondary,
  fullWidth,
  className,
  ...otherProps
}: ButtonProps) => {
  const buttonStyles = useStyles(styleRefs);

  const buttonClassName = classNames(
    className, // if consumer is using styled components
    buttonStyles.button,
    {[`${buttonStyles.primary}`]: primary},
    {[`${buttonStyles.secondary}`]: secondary},
    {[`${buttonStyles.fullWidth}`]: fullWidth},
    {[`${buttonStyles.defaultVariant}`]: !primary && !secondary}
  );

  if (as === 'a' || href !== '') { 
    return (
      <a {...otherProps} className={buttonClassName}>
        {children}
      </a>
    );
  }

  return (
    <button {...otherProps} className={buttonClassName}>
      {children}
    </button>
  );
};