import { useSelector } from "react-redux";
import { selectTransactions } from "../../redux/transactions/selectors";
import TransactionItem from "../TransactionItem/TransactionItem";

const TransactionList = () => {
  const transactions = useSelector(selectTransactions);
  const sortedTransactions = [...transactions].sort((a, b) => b.date - a.date);

  return sortedTransactions.length > 0 ? (
    <ul>
      {sortedTransactions.map((transaction) => (
        <TransactionItem key={transaction.id} transaction={transaction} />
      ))}
    </ul>
  ) : (
    <p>Немає транзакцій</p>
  );
};

export default TransactionList;
