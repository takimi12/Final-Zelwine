import * as React from 'react';
const SVGComponent = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className='icon icon-tabler icon-tabler-chevron-down'
    width='0.85rem'
    height='0.85rem'
    viewBox='0 0 24 24'
    stroke='currentColor'
    strokeWidth={2}
    fill='none'
    strokeLinecap='round'
    strokeLinejoin='round'
    {...props}
  >
    <path stroke='none' d='M0 0h24v24H0z' fill='none' />
    <polyline points='6 9 12 15 18 9' />
  </svg>
);
export default SVGComponent;
