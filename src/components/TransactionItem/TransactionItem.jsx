import { useDispatch } from "react-redux";
import { delTransaction } from "../../redux/transactions/slice";
import PropTypes from "prop-types";
import { Item } from "./TransactionItem.styled";

const TransactionItem = ({ transaction: { amount, date, id, name, type } }) => {
  const newDate = new Date(date);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(delTransaction(id));
  };

  return (
    <Item type={type}>
      <span>{newDate.toLocaleDateString("uk-UA")}</span>
      <span>{name}</span>
      <span>{type === "income" ? `+${amount}` : `-${amount}`}грн.</span>
      <button className="delete-btn">ред.</button>
      <button onClick={() => handleDelete(id)}>x</button>
    </Item>
  );
};

export default TransactionItem;

TransactionItem.propTypes = {
  transaction: PropTypes.shape({
    amount: PropTypes.string.isRequired,
    date: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,
};
