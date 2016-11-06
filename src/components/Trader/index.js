import React, { PropTypes as P } from 'react';

const Trader = props => {
  return (
    <div>Trader</div>
  )
}

Trader.propTypes = {
  symbol: P.object.isRequired
}

export default Trader;
