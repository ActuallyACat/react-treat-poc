import { style, styleMap } from 'treat';
import { deriveSize } from './util';

export const bodySizeVariants = styleMap(theme => ({
  xs: {
    fontSize: deriveSize(1)
  },
  sm: {
    fontSize: deriveSize(1.2)
  },
  md: {
    fontSize: deriveSize(1.4)
  },
  lg: {
    fontSize: deriveSize(1.6)
  },
  xl: {
    fontSize: deriveSize(1.8)
  }
}));

export const headingBase = style(theme => ({
  fontFamily: theme.typography.serif,
  fontWeight: 700
}));

export const bodyBase = style(theme => ({
  fontFamily: theme.typography.sansSerif,
  fontWeight: 400
}));

