import React, { PropTypes as P } from 'react';

const PortfolioList = props => {
  const { portfolio } = props;
  return (
    <div>
      {portfolio.map(p => {
        return (
          <div>
            {JSON.stringify(p)}
          </div>
        )
      })}
    </div>
  )
}

PortfolioList.propTypes = {
  portfolio: P.array.isRequired
}

export default PortfolioList;
