export const useConvertToUSD = (
  value = 0,
  symbol,
  precision = 6,
  defaultValue = "0.00"
) => {
  const currencies = [
    { id: "btc", price: "1" },
    { id: "usdt", price: "1" },
  ];

  const currency = currencies.find(
    (e) => e.id.toLowerCase() === symbol?.toLowerCase()
  );

  console.log((currency?.price * value).toPrecision(precision));

  //Decimal.formatRemoveZero(currency.price * value, precision);
  return undefined
    ? defaultValue
    : (currency?.price * value).toPrecision(precision);
};
