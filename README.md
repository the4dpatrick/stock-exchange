# Stock Exchange
A simple stock exchange using [Benzinga API](http://data.benzinga.com/rest/richquoteDelayed?symbols=F)

### Features
A simple portfolio system that allows a user to buy and sell stock according to the the top bid and ask in the order book. When a user lands on the page they will be given $100,000.00 in cash to create their portfolio with (this is stored in localStorage). They will be able to lookup stocks by symbol and then buy shares of that particular stock at the current ask price. Once bought, stocks will appear in their portfolio and the total cost of the trade will be deducted from their cash balance. When they sell shares, the shares will be sold at the current bid price and the quantity sold will be taken out of their portfolio (removed completely if all shares sold) and the total amount from the sale will be added to their cash balance.

We use the stock data API. Below is the endpoint for the REST API that will be used to pull down the bid and ask for a symbol as JSON. If a symbol is not found, an error will be returned and displayed to users on the frontend that the symbol they requested was not found.

We'll assume that there are an infinite amount of shares available at the current bid and ask prices. Users are prevented from placing trades that would cause their total cash balance to go negative. Users are not allowed to sell more shares than the currently have available in their portfolio (For those familliar with shorting, this is only for long stock trades).

### API Endpoint
All data for the bid/ask/company name can be pulled down as JSON using this endpoint: http://data.benzinga.com/rest/richquoteDelayed?symbols=<symbol>

Examples

* http://data.benzinga.com/rest/richquoteDelayed?symbols=F
* http://data.benzinga.com/rest/richquoteDelayed?symbols=GE
* http://data.benzinga.com/rest/richquoteDelayed?symbols=JNJ

### Technologies:
[react](https://github.com/facebook/react), [redux](https://github.com/reactjs/redux), [axios](https://github.com/mzabriskie/axios), [react-router](https://github.com/ReactTraining/react-router), [react-router-redux](https://github.com/reactjs/react-router-redux), [react-select](https://github.com/JedWatson/react-select), [redux-logger](https://github.com/evgenyrodionov/redux-logger), [redux-thunk](https://github.com/gaearon/redux-thunk)
