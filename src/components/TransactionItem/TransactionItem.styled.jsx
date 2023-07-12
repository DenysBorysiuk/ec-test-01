import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 10px 20px;
  border-radius: 20px;
  border: 1px solid #2196f3;
  font-size: 20px;
`;

export const TransactionDate = styled.span`
  width: 150px;
  text-align: left;
`;

export const Amount = styled.span`
  width: 200px;
  font-size: 20px;
  font-weight: 500;
  text-align: left;
  color: ${(props) => (props.type === "income" ? "#21f33d" : "#f44336")};
`;

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-left: auto;
`;

export const DelBtn = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;

export const EditBtn = styled(NavLink)`
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;
