import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  gap: 100px;

  grid-template-rows: 80px auto 50px;
  grid-template-areas: 
  "header"
  "content"
  "footer";
`;

export const Main = styled.div`
  grid-area: content;
  display: flex;
  flex-direction: column;
  width: 99vw;
  padding: 0 250px;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 20px;

    h1 {
      border-bottom: 3px solid ${({theme}) => theme.COLORS.BLUE};
    }
    a {
      width: 100%;
    }

    section {
      display: flex;
      flex-direction: column;
      gap: 10px;
      text-align: left;
      margin: 60px 0;
    }
  }


  img {
    width: 80%
  }
`;