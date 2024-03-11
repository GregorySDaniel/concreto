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

`;