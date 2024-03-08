import styled from 'styled-components';
import background from '../../assets/bg3.png'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;


  grid-template-rows: 80px auto 50px;
  grid-template-areas: 
  "header"
  "content"
  "footer";
`;

export const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${background});
  background-size: cover;
  `;

export const ContactBox = styled.div`
  color: ${({theme})=>theme.COLORS.WHITE};
  background-color: ${({theme}) => theme.COLORS.BLUE};
  padding: 100px;

  
  display: flex;
  flex-direction: column;
  
  gap: 50px;

  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.4);

  h1{
    font-size: 56px;
  }
  
  section {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  
  section a {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 24px;
    color: ${({theme})=>theme.COLORS.WHITE};
    padding: 20px 50px;

    padding: 30px;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.4);

    border: 1px solid #e0e0e0;
    border-radius: 8px;
  
    transition: transform 0.2s;

    &:hover{
    transform: scale(1.1);
    }
  }
`;