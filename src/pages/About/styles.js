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
  grid-area: content;
  display: flex;
  flex-direction: column;
  gap: 200px;
`;

export const AboutUs = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 250px;

  img {
    width: 70%;
  }

  div {
    margin-left: -200px;
    padding: 20px;
    width: 400px;
    gap: 30px;
    color: ${({theme})=>theme.COLORS.WHITE};
    background-color: ${({theme})=>theme.COLORS.BLUE};
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.4);
    
  }

  p {
    font-size: 20px;
  }
`;

export const TagsSection = styled.div`
  display: flex;
  padding: 0 250px;
  justify-content: center;
  align-items: center;
  gap: 100px;
  width: 100%;

  svg {
    position: absolute;
    font-size: 64px;
    right: -20px;
    top: -20px;
  }
  
  div{
    display: flex;
    flex-direction: column;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.4);
    padding: 20px 40px;
    width: 30%;
    height: 100px;
    position: relative;
  }
  
  div:nth-child(2) {
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.4);
  margin: 140px 0 0 -110px;
  z-index: -1;
  }

  section {
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 30px;
    text-align: center;

    h1 {
    font-size: 64px;
    }

    p{
      font-size: 22px;
    }

  }

`;