import { useDispatch } from "react-redux";
import { addTransaction } from "../../redux/transactions/slice";
import { v4 as uuidv4 } from "uuid";
import { Formik, Field } from "formik";
import {
  ButtonWrapper,
  RadioWrapper,
  FormStyled,
  RadioLabel,
  Label,
  Input,
  Link,
  CancelBtn,
  SendBtn,
  Error,
} from "./AddForm.styled";
import { FaArrowLeft } from "react-icons/fa";
import schema from "../../helpers/schema";
import { useNavigate } from "react-router-dom";

const initialValues = {
  name: "",
  amount: "",
  type: "",
};

const AddForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //   console.log(new Date());
  //   console.log(new Date().toLocaleString("uk-UA"));
  const handleSubmit = (values, { resetForm }) => {
    dispatch(
      addTransaction({
        ...values,
        id: uuidv4(),
        date: Date.now(),
      })
    );
    resetForm();
    navigate("/");
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      {({ values }) => (
        <div>
          <Link to={"/"}>
            <FaArrowLeft color="#2196f3" /> Назад
          </Link>
          <FormStyled>
            <h2>Нова транзакція</h2>
            <Label>
              Назва транзакції
              <Input type="text" name="name" />
              <Error name="name" component="div" />
            </Label>
            <Label>
              Сума транзакції
              <Input type="text" name="amount" />
              <Error name="amount" component="div" />
            </Label>
            <RadioWrapper>
              <span>Тип транзакції</span>
              <div>
                <RadioLabel checked={values.type === "income"}>
                  Дохід
                  <Field
                    type="radio"
                    value="income"
                    name="type"
                    checked={values.type === "income"}
                  />
                </RadioLabel>

                <RadioLabel checked={values.type === "expense"}>
                  Витрата
                  <Field
                    type="radio"
                    value="expense"
                    name="type"
                    checked={values.type === "expense"}
                  />
                </RadioLabel>
                <Error name="type" component="div" />
              </div>
            </RadioWrapper>
            <ButtonWrapper>
              <CancelBtn to={"/"}>Скасувати</CancelBtn>
              <SendBtn type="submit">Додати</SendBtn>
            </ButtonWrapper>
          </FormStyled>
        </div>
      )}
    </Formik>
  );
};

export default AddForm;
