"use client";
import { useState, useEffect } from "react";

interface Rates {
  BTC: number;
  BNB: number;
  ETH: number;
  XRP: number;
  BCH: number;
  EOS: number;
  XMR: number;
  LTC: number;
}

interface CoinMarket{
  rates: Rates;
}

export default function CoinMarket() {
  const API_KEY = "6aba188fb9fcd35fe839c7994587b33a";
  const [data, setData] = useState<CoinMarket | null>(null);

  useEffect(() => {
    fetch(`https://api.coinlayer.com/live?access_key=${API_KEY}`)
      .then((response) => response.json())
      .then((jsonConverted) => {
        console.log("JSON Converted Data : ", jsonConverted);
        setData(jsonConverted);
      });
  }, []);  

  return (
    <div>
      <h1>Crypto Currency Market Rates</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Crypto Currency</th>
              <th>Rate</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>BTC</td>
            <td>{data?.rates?.BTC}</td>
          </tr>
          <tr>
            <td>BNB</td>
            <td>{data?.rates?.BNB}</td>
          </tr>
          <tr>
            <td>ETH</td>
            <td>{data?.rates?.ETH}</td>
          </tr>
          <tr>
            <td>XRP</td>
            <td>{data?.rates?.XRP}</td>
          </tr>
          <tr>
            <td>BCH</td>
            <td>{data?.rates?.BCH}</td>
          </tr>
          <tr>
            <td>EOS</td>
            <td>{data?.rates?.EOS}</td>
          </tr>
          <tr>
            <td>XMR</td>
            <td>{data?.rates?.XMR}</td>
          </tr>
          <tr>
            <td>LTC</td>
            <td>{data?.rates?.LTC}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}