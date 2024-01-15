/* eslint-disable react/prop-types */
import Card from "../../components/Header/Card/Card";
import CoinsList from "../../components/Header/CoinsList/CoinsList";
import FilterBlock from "../../components/Header/FilterBlock/FilterBlock";
import styles from "./styles.module.css";

const Main = ({ balance, setBalance, coins, setCoins }) => {
  return (
    <main className={styles.main}>
      <Card balance={balance} setBalance={setBalance} />
      <FilterBlock setCoins={setCoins} />
      {coins.length > 0 ? <CoinsList /> : <div>Loading...</div>}
    </main>
  );
};

export default Main;
