import { createTheme, globalStyle } from 'treat';
import normalise from './normalise';

export default createTheme({
  color: {
    primary: {
      coral: '#F04C5D',
      paper: '#F2EDDE',
      ink: '#3E4543'
    },  
    secondary: {
      seedling: '#45AD8F',
      ocean: '#1B7688',
      lapis: '#253C64',
      wisteria: '#727193',
      peach: '#F3786D',
      yuzu: '#FFCE1E'
    },
    utility: { 
      positive: '#43E699',
      negative: '#FF4757'
    }
  }, 
  typography: {
    sansSerif: '"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif', 
    serif: 'Georgia, "Times New Roman", Times, serif'
  },
  utility: {
    borderRadius: '3px'
  }
});

normalise.forEach(({ selector, rules }) => {
  globalStyle(selector, rules);
});
