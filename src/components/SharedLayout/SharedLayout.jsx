import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Container, Header, HeaderContainer } from "./SharedLayout.styled";
import { TfiMoney } from "react-icons/tfi";
import Loader from "../Loader/Loader";

const SharedLayout = () => {
  return (
    <>
      <Header>
        <HeaderContainer>
          <TfiMoney color="fff" size="30" />
          <h1>Budget Manager</h1>
        </HeaderContainer>
      </Header>
      <Container>
        <Suspense
          fallback={
            <div>
              <Loader />
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};

export default SharedLayout;
