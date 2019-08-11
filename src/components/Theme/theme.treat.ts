import { createTheme, globalStyle } from 'treat';
import { normalise } from '.';
import { Theme } from './theme'; 

normalise.forEach(({ selector, rules }) => {
  globalStyle(selector, rules);
});

const themeTemplate: Theme = {
  color: {
    primary: '#00c0a5',
    secondary: '#0d5a6d',
    info: '#488bd9',
    warn: '#f05800',
    error: '#ff1c4a',
    success: '#4ec000',
    light: '#ffffff',
    dark: '#1a1a1a'
  }, 
  typography: {
    sansSerif: "Helvetica,Arial,sans-serif", 
  },
  utility: {
    borderRadius: '3px'
  }
}

export const theme = createTheme(themeTemplate);
