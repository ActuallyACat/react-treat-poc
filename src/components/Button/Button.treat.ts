import { style } from 'treat';
import { space } from '../Spacing';
import { darken } from '../Color';
import { deriveSize } from '../Theme';

const defaultButton = {
  border: 0,
  padding: `${space('md')} ${space('lg')}`,
}

const defaultActive = {
  transform: 'translateY(1px)'
}

export const button = style(({ utility, typography }) => ({
  ...defaultButton,
  borderRadius: utility.borderRadius,
  fontWeight: 500,
  fontFamily: typography.sansSerif,
  fontSize: deriveSize(1.8)
}));

export const fullWidth = style({
  width: '100%'
});

export const primary = style(({ color }) => ({
  color: color.light,
  background: color.primary,
  ':hover': {
    background: `${darken(color.primary, 0.1)}`,
  },
  ':active': {
    ...defaultActive
  }
}));

export const secondary = style(({ color }) => ({
  background: 'transparent',
  color: color.secondary,
  ':hover': {
    background: `${darken(color.light, 0.1)}`,
    color: darken(color.secondary, 0.2),
  },
  ':active': {
    ...defaultActive
  }
}));

export const defaultVariant = style(({ color }) => ({
  color: color.dark,
  background: color.light,
  border: `1px solid ${darken(color.light, 0.2)}`,
  ':hover': {
    background: `${darken(color.light, 0.1)}`,
    border: `1px solid ${darken(color.light, 0.3)}`
  },
  ':active': {
    ...defaultActive
  }
}));
