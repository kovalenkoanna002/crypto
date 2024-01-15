/* eslint-disable react/prop-types */
import { WithRuBalance } from "../../../helpers/hoc/withRuBalance";
// import PropTypes from "prop-types";
import "./styles.css";

const Card = ({ balance, setBalance, ruBalance }) => {
  console.log({ ruBalance });
  return (
    <div className="card">
      <div className="card-block">
        <p>CRYPTO-FINANCE</p>
        <button onClick={setBalance}>Add money</button>
      </div>

      <div className="card-block">
        <p>RUSLAN</p>
        <p>{balance} $</p>
      </div>
    </div>
  );
};
// Card.propTypes = {
//   balance: PropTypes.number.isRequired,
//   setBalance: PropTypes.func.isRequired,

// };
export default WithRuBalance(Card);
