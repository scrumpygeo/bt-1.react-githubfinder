import React, { Fragment } from 'react';
import spinner from './spinner.gif';

const Spinner = () => (
  // don't need return keyword if no other jsx
  <Fragment>
    <img
      src={spinner}
      alt='Loading...'
      style={{ width: '200px', margin: 'auto', display: 'block' }}
    />
  </Fragment>
);

export default Spinner;
