import { style } from 'treat';

export const button = style(({ color, utility }) => ({
  backgroundColor: color.primary.coral, 
  color: color.primary.paper,
  border: 0,
  padding: '1rem',
  borderRadius: utility.borderRadius,
  fontWeight: 700,
}));