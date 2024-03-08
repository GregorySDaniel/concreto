import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;
  width: 100%;
  height: 100%;
  padding: 10px 250px;

  background-color: ${({theme})=> theme.COLORS.BLUE_100};
  
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  
  a {
    color: ${({theme})=>theme.COLORS.TEXT};
    font-size: 18px;
    font-weight: 600;
    padding: 2px;
    border-bottom: 3px solid ${({theme})=>theme.COLORS.BLUE_100};
    
  }

  a:hover{
    border-bottom: 3px solid ${({theme})=>theme.COLORS.BLUE};
  }
  
  img {
    width: 300px;
  }
  
  ul {
    display: flex;
    gap: 30px;
    list-style: none;
  }
  
  .active{
    border-bottom: 3px solid ${({theme})=>theme.COLORS.BLUE};
  }

`;
