import { buildFilterPrice } from "../../../filters";
import {
  MARKETS_DATA,
  MARKETS_ERROR,
  MARKETS_FETCH,
  MARKETS_SET_CURRENT_MARKET,
  MARKETS_SET_CURRENT_MARKET_IFUNSET,
  MARKETS_TICKERS_DATA,
  MARKETS_TICKERS_ERROR,
  MARKETS_TICKERS_FETCH,
} from "./constants";

export const initialMarketsState = {
  list: [],
  filters: {},
  currentMarket: undefined,
  tickers: {},
  tickerLoading: false,
  loading: false,
};

export const marketsReducer = (state = initialMarketsState, action) => {
  switch (action.type) {
    case MARKETS_FETCH:
      return {
        ...state,
        loading: true,
        timestamp: Math.floor(Date.now() / 1000),
      };
    case MARKETS_DATA:
      let filters = {};

      if (action.payload) {
        filters = action.payload
          .sort((a, b) => (a.id > b.id ? 1 : -1))
          .reduce((result, market) => {
            result[market.id] = result[market.id] || [];

            if (market.filters) {
              result[market.id] = market.filters.map(buildFilterPrice);
            }

            return result;
          }, {});
      }

      return {
        ...state,
        loading: false,
        list: action.payload,
        filters: filters,
      };
    case MARKETS_ERROR:
      return {
        ...state,
        loading: false,
      };

    case MARKETS_SET_CURRENT_MARKET:
      return {
        ...state,
        currentMarket: action.payload,
      };

    case MARKETS_SET_CURRENT_MARKET_IFUNSET:
      if (state.currentMarket) {
        return state;
      }

      return {
        ...state,
        currentMarket: action.payload,
      };

    case MARKETS_TICKERS_FETCH:
      return {
        ...state,
        tickerLoading: true,
        tickersTimestamp: Math.floor(Date.now() / 1000),
      };
    case MARKETS_TICKERS_DATA:
      return {
        ...state,
        tickerLoading: false,
        tickers: action.payload,
      };
    case MARKETS_TICKERS_ERROR:
      return {
        ...state,
        tickerLoading: false,
      };

    default:
      return state;
  }
};
