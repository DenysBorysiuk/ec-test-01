import { NavLink } from "react-router-dom";
import TransactionList from "../components/TransactionList/TransactionList";
import TransactionInfo from "../components/TransactionInfo/TransactionInfo";

const Home = () => {
  return (
    <div>
      <NavLink to={"/newTransaction"}>Нова транзакція</NavLink>
      <TransactionInfo />
      <h2>Історія транзакцій</h2>
      <TransactionList />
    </div>
  );
};

export default Home;
