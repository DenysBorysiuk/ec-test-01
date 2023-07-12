import TransactionList from "../components/TransactionList/TransactionList";
import TransactionInfo from "../components/TransactionInfo/TransactionInfo";
import AddBtn from "../components/AddBtn/AddBtn";

const Home = () => {
  return (
    <div>
      <AddBtn />
      <TransactionInfo />
      <TransactionList />
    </div>
  );
};

export default Home;
