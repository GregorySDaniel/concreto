import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 99vh;
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
  flex-direction: column;
  padding: 0 250px;
  justify-content: center;
  align-items: center;
  gap: 20px;
  
  svg:hover {
    cursor: pointer;
  }

  > section {
    display: flex;
    gap: 90px;
    justify-content: center;
    width: 50%;
    align-items: center;
    font-size: 64px;

  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 200px 200px 200px;
  grid-row: auto auto;
  gap: 10px;

  > div svg {
    color: red;
  }

`
