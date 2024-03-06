import styled from "styled-components";

export const Container = styled.footer`
  grid-area: footer;
  
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
`;

export const Info = styled.div`
  background: ${({theme}) => theme.COLORS.BLUE_100};
  padding: 20px 200px;
  width: 100%;

  display: flex;

  justify-content: center;
  align-items: center;
  gap: 150px;

  div {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  h1 {
    font-size: 24px;
    color: ${({theme})=> theme.COLORS.BLUE}
  }

  img {
    width: 200px;
  }
`;

export const Copyright = styled.div`
  background-color: ${({theme})=> theme.COLORS.BLUE};
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 10px;
  
  p {
    color: ${({theme})=>theme.COLORS.WHITE}
  }
`;

