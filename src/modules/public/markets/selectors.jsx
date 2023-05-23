
const selectMarketsState = (state) => state.public.markets;

export const selectMarkets = (state) => selectMarketsState(state).list;

export const selectMarketsLoading = (state)=> selectMarketsState(state).loading;

export const selectMarketsTimestamp = (state) => selectMarketsState(state).timestamp;

export const selectMarketsTickersTimestamp = (state) => selectMarketsState(state).tickersTimestamp;

export const selectCurrentMarket = (state) => selectMarketsState(state).currentMarket;

export const selectCurrentMarketFilters = (state) =>
	selectMarketFilters(state)[(selectCurrentMarket(state) || { id: '' }).id];

export const selectMarketTickers = (state) => selectMarketsState(state).tickers;

export const selectShouldFetchMarkets = (state) =>
	!selectMarketsTimestamp(state) && !selectMarketsLoading(state);

export const selectShouldFetchMarketsTickers = (state) => !selectMarketsTickersTimestamp(state);

export const selectMarketFilters = (state) => selectMarketsState(state).filters;
