import { style, styleMap } from 'treat';
import { deriveSize } from '../Theme/util';

export const bodySizeVariants = styleMap({
  xs: {
    fontSize: deriveSize(1.8),
    lineHeight: deriveSize(2.4)
  },
  sm: {
    fontSize: deriveSize(2),
    lineHeight: deriveSize(2.4)
  },
  md: {
    fontSize: deriveSize(2.2),
    lineHeight: deriveSize(2.4)
  },
  lg: {
    fontSize: deriveSize(2.4),
    lineHeight: deriveSize(2.4)
  },
  xl: {
    fontSize: deriveSize(2.8),
    lineHeight: deriveSize(3.6)
  }
});

export const headingSizeVariants = styleMap({
  xs: {
    fontSize: deriveSize(1.8),
    lineHeight: deriveSize(2.4) 
  },
  sm: {
    fontSize: deriveSize(2.2),
    lineHeight: deriveSize(2.4)
  },
  md: {
    fontSize: deriveSize(2.6),
    lineHeight: deriveSize(2.4)
  },
  lg: {
    fontSize: deriveSize(3.2),
    lineHeight: deriveSize(3.6)
  },
  xl: {
    fontSize: deriveSize(3.4),
    lineHeight: deriveSize(3.6)
  }
});

export const headingBase = style(({ typography, color }) => ({
  fontFamily: typography.sansSerif,
  fontWeight: 400,
  letterSpacing: 'normal',
  color: color.primary.ink
}));

export const bodyBase = style(({ typography, color }) => ({
  fontFamily: typography.sansSerif,
  fontWeight: 300,
  letterSpacing: 'normal',
  color: color.primary.ink
}));
