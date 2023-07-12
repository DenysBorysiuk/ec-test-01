import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import SharedLayout from "./components/SharedLayout/SharedLayout";

const Home = lazy(() => import("./pages/Home"));
const NewTransaction = lazy(() => import("./pages/NewTransaction"));
const EditTransaction = lazy(() => import("./pages/EditTransaction"));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/newTransaction" element={<NewTransaction />} />
        <Route
          path="/transaction/:transactionId"
          element={<EditTransaction />}
        ></Route>
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
