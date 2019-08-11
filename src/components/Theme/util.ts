/**
 * Derive the size of an element from the responsive CSS variable
 * @param multiplier 
 */
export const deriveSize = (multiplier: number) => {
  return `calc(${multiplier} * var(--ca-size))`;
}