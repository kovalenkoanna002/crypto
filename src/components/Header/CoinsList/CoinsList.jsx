/* eslint-disable react/prop-types */
import { useContext } from "react";
import "./styles.css";
import { CoinsContext } from "../../../context/coinsContext";

// eslint-disable-next-line react/prop-types
const CoinsList = () => {
  const coinsContext = useContext(CoinsContext);
  const { filteredCoins } = coinsContext;
  console.log(coinsContext);
  return (
    <ul className="coins-list">
      {filteredCoins.map((coin) => {
        return (
          <li className="coin-item" key={coin.uuid}>
            <div className="coin-item__info">
              <img
                className="coin-item__logo"
                src={coin.iconUrl}
                alt={coin.name}
              />
            </div>
            <p style={{ color: coin.color }}>{coin.name}/USD</p>
            <div className="coin-item__price">
              <p style={{ color: coin.color }}>
                {(+coin.price).toFixed(2)} USD
              </p>
              <p style={{ color: coin.color }}>
                {(+coin.btcPrice).toFixed(2)} BTC
              </p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default CoinsList;
