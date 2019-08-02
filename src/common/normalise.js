const normalise = [
  {
    selector: 'html, body', 
    rules: {
      margin: 0,
      padding: 0
    }
  },
  {
    selector: ':root',
    rules: {
      '--ca-size': '8px'
    }
  }
];

export default normalise;

// :root {
//   --ca-size: 8px;
// }

// @media (min-width: 36.0625em) {
//   :root {
//     --ca-size: 10px;
//   }
// }