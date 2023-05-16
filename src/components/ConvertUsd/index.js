import { useConvertToUSD } from "../../hooks/useConvertToUSD";

export const ConvertUsd = ({ value, symbol, precision, defaultValue }) => {
  console.log(useConvertToUSD(value, symbol));

  const price = useConvertToUSD(value, symbol, precision, defaultValue);

  return <>{price}</>;
};
