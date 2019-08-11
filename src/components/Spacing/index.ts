import { deriveSize } from '../Theme';

export const space = (size?: string): string => {
  switch (size) {
    case 'xs':
        return deriveSize(0.5);
    case 'sm':
      return deriveSize(1);
    case 'md':
      return deriveSize(1.5);
    case 'lg':
      return deriveSize(2);
    case 'xl':
      return deriveSize(3);
    default: 
      return deriveSize(1);
  }
}