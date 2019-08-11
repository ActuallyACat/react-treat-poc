import * as React from 'react';
import { useTheme } from 'react-treat';

export function withTheme(Component: React.ComponentType) {
  return function(props: any) {
    const theme = useTheme();
    return <Component theme={theme} {...props} />
  };
}