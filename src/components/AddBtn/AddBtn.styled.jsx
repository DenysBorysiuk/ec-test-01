import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Link = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 150px;
  height: 50px;
  margin-bottom: 20px;
  margin-left: auto;
  font-size: 16px;
  line-height: calc(19 / 16);
  font-weight: 500;
  color: #fff;
  text-transform: uppercase;
  text-decoration: none;
  border-radius: 20px;
  background-color: #2196f3;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #1976d2;
  }
`;
