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
  align-items: center;
  padding: 0 250px;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 10px;


    a {
      width: 100%;
    }

    section {
      display: flex;
      flex-direction: column;
      gap: 10px;
      text-align: left;
      margin: 60px 0;
      padding: 30px;
      p, a {
        font-size: 18px;
        color: ${({theme})=>theme.COLORS.TEXT};
      }
      
      h1 {
        text-align: center;
        font-size: 36px;
        margin-bottom: 10px;
      }
    }
  }


  img {
    width: 100%;
    border: 10px solid ${({theme}) => theme.COLORS.BLUE};
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    background-color: #f9f9f9;
  }
`;