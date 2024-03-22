import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 99vh;
  display: grid;
  gap: 6rem;

  grid-template-rows: 5rem auto 3rem;
  grid-template-areas: 
  "header"
  "content"
  "footer";
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 15rem;
  justify-content: center;
  align-items: center;
  gap: 12rem;
  
  svg:hover {
    cursor: pointer;
  }

  > section {
    display: flex;
    gap: 5rem;
    justify-content: center;
    width: 50%;
    align-items: center;
    font-size: 3.5rem;

  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 12rem 12rem 12rem;
  grid-row: auto auto;
  gap: 10px;

  > div svg {
    color: red;
  }

`
