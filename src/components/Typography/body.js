import React from 'react';

export const Body = ({
  as = 'p', 
  s = 'md',
  children,
  ...otherProps
}) => {

  return (
    <p {...otherProps}>{children}</p>
  );
}