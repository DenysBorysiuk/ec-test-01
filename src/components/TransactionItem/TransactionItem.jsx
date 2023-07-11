import { Item } from "./TransactionItem.styled";

const TransactionItem = () => {
  return (
    <Item>
      <span>Type</span>
      <span>-$400</span>
      <span>20/07/2023</span>
      <button className="delete-btn">ред.</button>
      <button className="delete-btn">x</button>
    </Item>
  );
};

export default TransactionItem;
