import styled from "styled-components";
import background2 from '../../assets/bg-2.png'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  
  grid-template-rows: 5rem auto 3rem;
  grid-template-areas: 
  "header"
  "content"
  "footer";
  
  `;
  
  export const Main = styled.div`
  grid-area: content;
  display: flex;
  flex-direction: column;
  width: 100vw;
`;

export const Intro = styled.div`
  position: relative;

  img {
    width: 100%;
  }

  .gradient {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0));
  }

`;

export const Tags = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3rem;

  padding: 0 12rem;

  margin-top: 6rem;

  align-items: center;
  justify-content: center;

  @media (max-width: 1280px){
    flex-direction: column;
  }
`;

export const Contact = styled.div`
  margin-top: 6rem;
  background: url(${background2});
  justify-content: center;
  align-items: center;
  padding: 6rem;
  color: ${({theme})=>theme.COLORS.WHITE};
  display: flex;
  gap: 6rem;
  width: 100vw;
  @media (max-width: 1280px){
    flex-direction: column;
  }  

  h1{
    font-size: 2.2rem;
  }

  p {
    font-size: 1.2rem;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
  }

  div:nth-child(2){
  padding: 2rem;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.4);

  border: 1px solid #e0e0e0;
  border-radius: 8px;
  
  transition: transform 0.2s;

  &:hover{
    transform: scale(1.1);
  }
  }

  section {
    display: flex;
    gap: 2rem;
    align-items: center;
    width: 100%;
    @media (max-width: 1280px){
    flex-direction: column;
  }
  }

  button {
    width: 22rem;
  }
  
`;

