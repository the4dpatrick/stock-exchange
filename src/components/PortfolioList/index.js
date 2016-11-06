import React, { PropTypes as P } from 'react';
import './index.css';
import { Link } from 'react-router';
import { moneyFormat } from '../../utils';

const PortfolioList = props => {
  const { portfolio } = props;
  return (
    <div className="portfolio-list">
      <div className="row header">
        <div className="cell">
          Company
        </div>
        <div className="cell">
          Quantity
        </div>
        <div className="cell">
          Avg. Price Paid
        </div>
      </div>

      {portfolio.map(p => {
        const avgPricePaid = p.pricePaid.reduce((a,b) => a+b, 0)/p.pricePaid.length;
        return (
          <Link to={`/symbol/${p.symbol}`}className="row" key={p.name}>
            <div className="cell">
              {p.name}
            </div>
            <div className="cell">
              {p.quantity}
            </div>
            <div className="cell">
              {moneyFormat(avgPricePaid)}
            </div>
          </Link>

        )
      })}
    </div>
  )
}

PortfolioList.propTypes = {
  portfolio: P.array.isRequired
}

export default PortfolioList;
