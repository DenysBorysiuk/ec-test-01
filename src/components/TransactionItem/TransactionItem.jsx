import { useDispatch } from "react-redux";
import { delTransaction } from "../../redux/transactions/slice";
import PropTypes from "prop-types";
import {
  Item,
  BtnWrapper,
  Amount,
  DelBtn,
  EditBtn,
  TransactionDate,
} from "./TransactionItem.styled";
import { FaRegTrashAlt, FaEdit } from "react-icons/fa";

const TransactionItem = ({ transaction: { amount, date, id, name, type } }) => {
  const newDate = new Date(date);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(delTransaction(id));
  };

  return (
    <Item type={type}>
      <TransactionDate>{newDate.toLocaleDateString("uk-UA")}</TransactionDate>
      <Amount type={type}>
        {type === "income" ? `+${amount}` : `-${amount}`}грн.
      </Amount>
      <span>{name}</span>
      <BtnWrapper>
        <EditBtn to={`/transaction/${id}`}>
          <FaEdit size="20" color="#2196f3" />
        </EditBtn>
        <DelBtn onClick={() => handleDelete(id)}>
          <FaRegTrashAlt size="20" color="#f44336" />
        </DelBtn>
      </BtnWrapper>
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
