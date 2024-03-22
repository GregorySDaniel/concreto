import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
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
  padding: 0 15rem;
  justify-content: space-around;
  width: 99vw;
  gap: 1rem;

  @media (max-width: 1290px) {
    flex-direction: column;
    gap: 2rem;
  }

`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h1{
    font-size: 2rem;
  }

  p {
    text-align: left;
    font-size: 1.2rem;
    padding: 4px;
    border-left: 3px solid ${({theme})=>theme.COLORS.WHITE};
  }

  section {
    display: flex;
    flex-direction: column;
    gap: .8rem;
  }

  li{
    list-style: none;
  }

  li.active button {
    border-left: 3px solid ${({theme})=>theme.COLORS.BLUE};
  }

  button{
    background: none;
    border: none;
  }
  
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 24rem 24rem;
  grid-row: auto auto;
  gap: 1rem;

  @media (max-width: 1280px) {
    display: flex;
    flex-direction: column;
  }
`

