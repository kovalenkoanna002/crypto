/* eslint-disable react/prop-types */

import React, { useContext } from "react";
import "./styles.css";
import { CoinsContext } from "../../../context/coinsContext";
import { useFilterCoins } from "../../../helpers/hooks/useFilterCoins";

const FilterBlock = ({ setCoins }) => {
  const coinsContext = useContext(CoinsContext);
  const { coins } = coinsContext;

  const { setValue, value } = useFilterCoins(setCoins, coins);

  console.log(value);
  return (
    <div className="filter-block">
      <input
        onChange={(e) => setValue(e.target.value)}
        value={value}
        className="input"
        type="text"
        placeholder="btcoin"
      />
    </div>
  );
};

export default React.memo(FilterBlock);
