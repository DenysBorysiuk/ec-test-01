import { useSelector } from "react-redux";
import { selectTransactions } from "../../redux/transactions/selectors";
import { List, Item } from "./TransactionInfo.styled";

const TransactionInfo = () => {
  const transactions = useSelector(selectTransactions);

  const totalIncome = transactions
    .filter((transaction) => transaction.type === "income")
    .reduce((total, transaction) => total + Number(transaction.amount), 0);

  const totalExpenses = transactions
    .filter((transaction) => transaction.type === "expense")
    .reduce((total, transaction) => total + Number(transaction.amount), 0);

  const budgetBalance = totalIncome - totalExpenses;

  return (
    <List>
      <Item>
        <span>Сума доходів:</span>
        <span>{totalIncome}грн</span>
      </Item>
      <Item>
        <span>Сума витрат:</span>
        <span>{totalExpenses}грн</span>
      </Item>
      <Item>
        <span>Залишок бюджету:</span>
        <span>{budgetBalance}грн</span>
      </Item>
    </List>
  );
};

export default TransactionInfo;
