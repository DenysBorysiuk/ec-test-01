import { List, Item } from "./TransactionInfo.styled";

const TransactionInfo = () => {
  return (
    <List>
      <Item>
        <span>Сума доходів:</span>
        <span>100грн</span>
      </Item>
      <Item>
        <span>Сума витрат:</span>
        <span>100грн</span>
      </Item>
      <Item>
        <span>Залишок бюджету:</span>
        <span>100грн</span>
      </Item>
    </List>
  );
};

export default TransactionInfo;
