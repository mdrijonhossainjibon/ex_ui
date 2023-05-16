export const subscribeKline = (symbol, interval, callback) => {
  const socket = new WebSocket(
    `wss://stream.binance.com:9443/ws/${symbol.toLowerCase()}@kline_${interval}`
  );

  socket.addEventListener("open", () => {
    console.log("WebSocket opened");
  });

  socket.addEventListener("message", (event) => {
    const klineData = JSON.parse(event.data).k;

    const data = {
      timestamp: klineData.t,
      open: parseFloat(klineData.o),
      high: parseFloat(klineData.h),
      low: parseFloat(klineData.l),
      close: parseFloat(klineData.c),
      volume: parseFloat(klineData.v),
    };

    callback(data);
  });
};

const baseUrl = "https://api.binance.com";

export async function fetchKline(symbol, interval) {
  const url =
    baseUrl + `/api/v3/klines?symbol=BTCUSDT&interval=${interval}&limit=1000`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    const klineData = data.map((k) => ({
      open: parseFloat(k[1]),
      high: parseFloat(k[2]),
      low: parseFloat(k[3]),
      close: parseFloat(k[4]),
      volume: parseFloat(k[5]),
      timestamp: k[6],
    }));
    return klineData;
  } catch (error) {
    console.error("Failed to fetch kline data", error);
    return [];
  }
}
