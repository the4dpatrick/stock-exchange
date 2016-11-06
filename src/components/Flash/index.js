import React, { PropTypes as P } from 'react';
import './index.css';

const Flash = props => {
  const { error, close } = props;
  return (
    <div id="flash">
      {error}
      <span onClick={close} id="close">x</span>
    </div>
  )
}

Flash.propTypes = {
  error: P.string.isRequired,
  close: P.func.isRequired
}

export default Flash;
