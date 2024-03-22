import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;
  width: 100%;
  height: 100%;


  background-color: ${({theme})=> theme.COLORS.BLUE_100};
  
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  align-items: center;
  
  a {
    color: ${({theme})=>theme.COLORS.TEXT};
    font-size: 1rem;
    font-weight: 600;
    padding: 2px;
    border-bottom: 3px solid ${({theme})=>theme.COLORS.BLUE_100};
    
  }

  a:hover{
    border-bottom: 3px solid ${({theme})=>theme.COLORS.BLUE};
  }
  
  img {
    width: 19rem;
  }
  
  ul {
    display: flex;
    gap: 2rem;
    list-style: none;
    @media (max-width: 1280px) {
      display: none;
    }
  }
  
  .active{
    border-bottom: 3px solid ${({theme})=>theme.COLORS.BLUE};
  }

`;

export const Menu = styled.button`
  background: none;
  border: none;
  display: none;
  position: relative;
  @media (max-width: 1280px) {
    display: block;
  }
`;

