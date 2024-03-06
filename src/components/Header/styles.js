import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;
  width: 100%;
  height: 100%;
  padding: 10px 250px;

  background-color: ${({theme})=> theme.COLORS.WHITE};
  
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  
  a {
    color: ${({theme})=>theme.COLORS.BLACK};
    font-size: 18px;
    font-weight: 500;
    padding: 2px;
    border-bottom: 3px solid ${({theme})=>theme.COLORS.WHITE};
  }

  a:hover{
    border-bottom: 3px solid ${({theme})=>theme.COLORS.BLUE};
  }

  img {
    height: 100%;
  }

  div {
    display: flex;
    gap: 30px;
  }

`;
