import { useSelector } from "react-redux";
import { selectTransactions } from "../../redux/transactions/selectors";
import TransactionItem from "../TransactionItem/TransactionItem";
import { List, Title } from "./TransactionList.styled";

const TransactionList = () => {
  const transactions = useSelector(selectTransactions);
  const sortedTransactions = [...transactions].sort((a, b) => b.date - a.date);

  return (
    <>
      <Title>Історія транзакцій</Title>
      {sortedTransactions.length > 0 ? (
        <List>
          {sortedTransactions.map((transaction) => (
            <TransactionItem key={transaction.id} transaction={transaction} />
          ))}
        </List>
      ) : (
        <p>Немає транзакцій</p>
      )}
    </>
  );
};

export default TransactionList;
