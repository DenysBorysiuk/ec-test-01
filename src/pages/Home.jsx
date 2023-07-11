import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>Home page</p>
      <NavLink to={"/addTransaction"}>add</NavLink>
    </div>
  );
};

export default Home;
