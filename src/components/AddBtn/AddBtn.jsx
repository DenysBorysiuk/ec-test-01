import { Link } from "./AddBtn.styled";
import { FaPlus } from "react-icons/fa";

const AddBtn = () => {
  return (
    <Link to="/newTransaction">
      <FaPlus size="20" />
      <span>Додати</span>
    </Link>
  );
};

export default AddBtn;
