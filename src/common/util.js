import { globalStyle } from 'treat';

const normalise = [
  {
    selector: 'html, body', 
    rules: {
      margin: 0,
      padding: 0
    }
  },
  {
    selector: 'body',
    rules: {
      
    }
  }
];

export default normalise.map(globalStyle);