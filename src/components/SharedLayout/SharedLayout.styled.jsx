import styled from "@emotion/styled";

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 16px;
  text-align: center;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 10px 0;
  margin-bottom: 36px;
  background-color: #2196f3;

  > h1 {
    /* margin: 0 auto; */
    font-size: 26px;
    font-weight: 700;
    color: #fff;
    /* text-transform: uppercase; */
  }
`;
