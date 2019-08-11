import { style } from 'treat';
import { space } from '../Spacing';
import { Theme } from '../Theme/theme';

export const defaultVariant = style(({ color }: Theme) => ({
  display: 'flex',
  alignItems: 'center',
  color: color.light,
  background: color.secondary,
  padding: space('md'),
  justifyContent: 'space-between'
}));

export const resetList = style({
  display: 'flex',
  listStyleType: 'none'
});
