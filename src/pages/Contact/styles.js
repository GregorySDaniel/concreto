import styled from 'styled-components';
import background from '../../assets/bg3.png'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;


  grid-template-rows: 5rem auto 3rem;
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
  padding: 6rem;

  
  display: flex;
  flex-direction: column;
  
  gap: 3rem;

  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.4);

  h1{
    font-size: 3.2rem;
    @media (max-width: 1280px){
      font-size: 2rem;
    }
  }
  
  @media (max-width: 1280px){
    padding: 3rem;
    }
  
  section {
    display: flex;
    align-items: center;
    justify-content: space-around;
    @media (max-width: 1280px){
      flex-direction: column;
      gap: 2rem;
    }
  }
  
  section a {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 1.5rem;
    color: ${({theme})=>theme.COLORS.WHITE};
    padding: 1.2rem 3rem;

    padding: 2rem;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.4);

    border: 1px solid #e0e0e0;
    border-radius: 8px;
  
    transition: transform 0.2s;

    &:hover{
    transform: scale(1.1);
    }

  }
`;