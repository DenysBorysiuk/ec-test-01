import { useDispatch, useSelector } from "react-redux";
import { selectTransactions } from "../../redux/transactions/selectors";
import { updateTransaction } from "../../redux/transactions/slice";
import { useParams } from "react-router-dom";
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
} from "./EditForm.styled";
import { FaArrowLeft } from "react-icons/fa";
import schema from "../../helpers/schema";
import { useNavigate } from "react-router-dom";

const EditForm = () => {
  const dispatch = useDispatch();
  const { transactionId } = useParams();
  const tranasctions = useSelector(selectTransactions);
  const tranasction = tranasctions.find(
    (transaction) => transaction.id === transactionId
  );
  const navigate = useNavigate();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(
      updateTransaction({
        ...values,
        id: transactionId,
        date: Date.now(),
      })
    );
    resetForm();
    navigate("/");
  };

  return (
    <Formik
      initialValues={{
        name: tranasction.name,
        amount: tranasction.amount,
        type: tranasction.type,
      }}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      {({ values }) => (
        <div>
          <Link to={"/"}>
            <FaArrowLeft color="#2196f3" /> Назад
          </Link>
          <FormStyled>
            <h2>Редагування</h2>
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

export default EditForm;
