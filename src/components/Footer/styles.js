import styled from "styled-components";

export const Container = styled.footer`
  grid-area: footer;
  width: 100%;
  height: 100%;
  padding: 10px 100px;

  background-color: ${({theme})=> theme.COLORS.BLUE};
  
  display: flex;
  align-items: center;
  justify-content: center;
  

  p {
    color: ${({theme})=>theme.COLORS.WHITE}
  }
`;

