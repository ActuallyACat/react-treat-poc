import * as Color from 'color';

export type Modifier = 0.1 | 0.2 | 0.3 | 0.4 | 0.5 | 0.6 | 0.7 | 0.8 | 0.9;

/**
 * Modifies the lightness channel. e.g hsl(100, 50%, 50%) -> hsl(100, 50%, 75%)
 * @param color Theme color
 * @param modifier Value to modify by
 */
export const lighten = (color: string, modifier?: Modifier): string => {
  const newColor = Color(color);

  return newColor.lighten(modifier || 0.2).toString();
}

/**
 * Modifies the lightness channel. e.g. hsl(100, 50%, 50%) becomes hsl(100, 50%, 25%)
 * @param color Theme color
 * @param modifier Value to modify by
 */
export const darken = (color: string, modifier?: Modifier): string => {
  const newColor = Color(color);

  return newColor.darken(modifier || 0.2).toString();
}
