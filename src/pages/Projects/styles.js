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
  display: flex;
  padding: 0 250px;
  justify-content: space-around;
  width: 99vw;
  gap: 20px;

`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  h1{
    font-size: 36px;
  }

  p {
    font-size: 22px;
    padding: 4px;
    border-left: 3px solid ${({theme})=>theme.COLORS.WHITE};
  }

  section {
    display: flex;
    flex-direction: column;
    gap: 12px;

    :nth-child(1){
      border-left: 3px solid ${({theme})=>theme.COLORS.BLUE};
    }
  }

  
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 400px 400px;
  grid-row: auto auto;
  gap: 20px

`

