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
} from "./AddForm.styled";
import { FaArrowLeft } from "react-icons/fa";

const initialValues = {
  name: "",
  amount: "",
  type: "",
};

const AddForm = () => {
  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
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
            </Label>
            <Label>
              Сума транзакції
              <Input type="text" name="amount" />
            </Label>
            {console.log(values.type)}
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
