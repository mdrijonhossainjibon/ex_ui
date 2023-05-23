import React, { useEffect, useState } from "react";
import { Table, Space, Button } from "antd";
import axios from "axios";

const MarketTable = () => {
  const [cryptoData, setCryptoData] = useState([]);
  const [selectedCrypto, setSelectedCrypto] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    fetchCryptoData();
  }, []);

  const fetchCryptoData = async () => {
    try {
      const response = await axios.get(
        "https://api.binance.com/api/v3/ticker/24hr"
      );
      setCryptoData(response.data);
    } catch (error) {
      console.log("Error fetching crypto data:", error);
    }
  };

  const handleChartClick = (record) => {
    setSelectedCrypto(record);
  };

  const handleCloseChart = () => {
    setSelectedCrypto(null);
  };

  const handleSort = () => {
    if (sortOrder === "asc") {
      setCryptoData([...cryptoData].sort((a, b) => a.lastPrice - b.lastPrice));
      setSortOrder("desc");
    } else {
      setCryptoData([...cryptoData].sort((a, b) => b.lastPrice - a.lastPrice));
      setSortOrder("asc");
    }
  };

  const getIconUrl = (symbol) => {
    return `https://coinicons-api.vercel.app/api/icon/${symbol
      .substring(0, 3)
      .toLowerCase()}`;
  };

  const columns = [
    {
      title: "Symbol",
      dataIndex: "symbol",
      key: "symbol",
      render: (symbol) => (
        <img
          src={getIconUrl(symbol)}
          alt={symbol}
          style={{ marginRight: 8, width: 40, height: 40 }}
        />
      ),
    },
    {
      title: "Price",
      dataIndex: "lastPrice",
      key: "lastPrice",
      sorter: true,
      sortOrder: sortOrder === "asc" ? "ascend" : "descend",
    },
    {
      title: "Volume",
      dataIndex: "volume",
      key: "volume",
      sorter: true,
    },
    {
      title: "Charts",
      key: "charts",
      render: (_, record) => (
        <Space size="middle">
          <Button onClick={() => handleChartClick(record)}>
            24h Line Chart
          </Button>
          <Button onClick={() => handleChartClick(record)}>
            24h Bar Chart
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <h2>Cryptocurrency Market Table</h2>
      <Button onClick={handleSort}>Sort by Price</Button>
      <Table
        columns={columns}
        dataSource={cryptoData}
        rowKey="symbol"
        pagination={false}
      />
    </div>
  );
};

export default MarketTable;
