import React, { PropTypes as P } from 'react';
import './index.css';
import { moneyFormat } from '../../utils';

const BidAskTable = props => {
  const { bidPrice, askPrice } = props;
  return (
    <div className="bid-ask-table">
      <div className="bid-ask-table-header">
        <div className="bid-ask-table-header-cell">
          Bid
        </div>
        <div className="bid-ask-table-header-cell">
          Ask
        </div>
      </div>
      <div className="bid-ask-table-row">
        <div className="bid-ask-table-row-cell">{moneyFormat(bidPrice)}</div>
        <div className="bid-ask-table-row-cell">{moneyFormat(askPrice)}</div>
      </div>
    </div>
  )
}

BidAskTable.propTypes = {
  bidPrice: P.number.isRequired,
  askPrice: P.number.isRequired,
}

export default BidAskTable;
