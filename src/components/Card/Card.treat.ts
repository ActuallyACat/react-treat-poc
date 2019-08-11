import { style } from 'treat';
import { Theme } from '../Theme/theme';
import { space } from '../Spacing'; 
import { darken } from '../Color';

export const base = style(({ color, utility }: Theme) => ({
  boxShadow: `5px 5px 5px #eee`,
  padding: space('lg'),
  borderRadius: utility.borderRadius,
  border: `1px solid ${darken(color.light, 0.2)}`,
}));