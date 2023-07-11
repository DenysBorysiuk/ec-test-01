import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import SharedLayout from "./components/SharedLayout/SharedLayout";

const Home = lazy(() => import("./pages/Home"));
const AddTransaction = lazy(() => import("./pages/AddTransaction"));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/addTransaction" element={<AddTransaction />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
