import { style } from 'treat';

export const headingBase = style(({ typography, color }) => ({
  fontFamily: typography.serif,
  fontWeight: 700,
  color: color.primary.ink
}));
