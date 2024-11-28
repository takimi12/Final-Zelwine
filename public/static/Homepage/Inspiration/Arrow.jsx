import * as React from 'react';
const Arrow = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={8}
    fill='none'
    {...props}
  >
    <path
      fill='#252727'
      d='M6 7.623.078 1.7.907.871 6 5.964 11.093.871l.83.83L6 7.622Z'
    />
  </svg>
);
export default Arrow;
