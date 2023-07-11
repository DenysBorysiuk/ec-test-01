import styled from "@emotion/styled";
import { Form, Field } from "formik";
import { NavLink } from "react-router-dom";

export const Link = styled(NavLink)`
  display: flex;
  align-items: center;
  width: fit-content;
  gap: 10px;
  margin-bottom: 20px;
  font-weight: 500;
  color: #2196f3;
  text-decoration: none;
  text-transform: uppercase;
  transition: transform 0.2s ease-in-out;
  will-change: transform;

  &:hover {
    transform: scale(1.05);
  }
`;

export const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin: 0 auto;
  width: 400px;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 20px;
  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
`;

export const Label = styled.label`
  position: relative;
  width: 100%;
  text-align: left;
`;

export const Input = styled(Field)`
  width: 100%;
  padding: 9px 15px;
  outline: none;
  border-radius: 40px;
  border: 1px solid #2196f3;
  margin-top: 5px;
`;

export const RadioWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  width: 100%;

  > div {
    display: flex;
    gap: 10px;
  }
`;

export const RadioLabel = styled.label`
  padding: 8px 16px;
  width: fit-content;
  cursor: pointer;
  font-weight: 500;
  font-size: 14px;
  line-height: calc(19 / 14);
  border-radius: 20px;
  background-color: ${(props) => (props.checked ? "#54adff" : "#CCE4FB")};
  color: ${(props) => (props.checked ? "#FEF9F9" : "#54ADFF")};
  transition: transform 0.2s ease-in-out;
  will-change: transform;

  &:hover {
    transform: scale(1.05);
  }

  > input {
    visibility: hidden;
    height: 0;
    width: 0;
    margin: 0;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 20px;
`;

export const SendBtn = styled.button`
  padding: 8px 16px;
  width: fit-content;
  cursor: pointer;
  font-weight: 500;
  font-size: 14px;
  line-height: calc(19 / 14);
  text-transform: uppercase;
  border: none;
  border-radius: 20px;
  background-color: #54adff;
  color: #fef9f9;
  will-change: transform;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

export const CancelBtn = styled(NavLink)`
  padding: 8px 16px;
  width: fit-content;
  cursor: pointer;
  font-weight: 500;
  font-size: 14px;
  line-height: calc(19 / 14);
  text-decoration: none;
  text-transform: uppercase;
  border-radius: 20px;
  background-color: #ffffff;
  color: #54adff;
  will-change: transform;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;
