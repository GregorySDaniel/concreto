import styled from "styled-components";
import background2 from '../../assets/bg-2.png'

export const Container = styled.div`
  width: 99vw;
  height: 100vh;
  display: grid;
  
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
  gap: 50px;

  padding: 0 200px;

  margin-top: 100px;

  align-items: center;
  justify-content: center;

`;

export const Contact = styled.div`
  margin-top: 100px;
  background: url(${background2});
  justify-content: center;
  align-items: center;
  padding: 100px;
  color: ${({theme})=>theme.COLORS.WHITE};
  display: flex;
  gap: 100px;
  width: 99vw;  

  h1{
    font-size: 36px;
  }

  p {
    font-size: 20px;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  div:nth-child(2){
  padding: 30px;
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
    gap: 30px;
    align-items: center;
    width: 100%;
  }

  button {
    width: 330px;
  }
  
`;

