export interface normaliseProps { 
  selector: string, 
  rules: object
};

export const normalise: normaliseProps[] = [
  {
    selector: 'html, body, ul', 
    rules: {
      margin: 0,
      padding: 0
    }
  },
  {
    selector: ':root',
    rules: {
      '--ca-size': '8px',
      '@media': {
        '(min-width: 36.0625em)': {
          '--ca-size': '10px'
        }
      }
    }
  }, 
];