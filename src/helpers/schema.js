import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().required("Назва транзакції є обов'язковою"),
  amount: yup
    .number("")
    .required("Сума транзакції є обов'язковою")
    .typeError("Сума транзакції має бути числом"),
  type: yup.string().required("Тип транзакції є обов'язковим"),
});

export default schema;
