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
  grid-area: content;
  display: flex;
  flex-direction: column;
  gap: 12rem;
`;

export const AboutUs = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 15rem;

  @media (max-width: 1280px) {
    flex-direction: column;
  }

  img {
    width: 70%;
  }

  div {
    margin-left: -15rem;
    padding: 1.2rem;
    width: 30rem;
    gap: 2rem;
    color: ${({theme})=>theme.COLORS.WHITE};
    background-color: ${({theme})=>theme.COLORS.BLUE};
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.4);

    @media (max-width: 1280px) {
      margin: -3rem 0 0 0;
  }
    
  }

  p {
    font-size: 1.2rem;
  }
`;

export const TagsSection = styled.div`
  display: flex;
  padding: 0 15rem;
  justify-content: center;
  align-items: center;
  gap: 6rem;
  width: 100%;

  @media (max-width: 1280px) {
    flex-direction: column;
  }
  

  svg {
    position: absolute;
    font-size: 4rem;
    right: -1.2rem;
    top: -1.2rem;
  }
  
  div{
    display: flex;
    flex-direction: column;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.4);
    padding: 1.2rem 2.4rem;
    width: 30%;
    height: 6rem;
    position: relative;
    @media (max-width: 1280px) {
    margin: 0 8rem 0 0;
  }
  }
  
  div:nth-child(2) {
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.4);
  margin: 8rem 0 0 -6.5rem;
  z-index: -1;
  @media (max-width: 1280px) {
    margin: -6rem 0 0 8rem;
  }
  }

  section {
    width: 30rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    text-align: center;

    h1 {
    font-size: 4rem;
    }

    p{
      font-size: 1.5rem;
    }

  }

`;