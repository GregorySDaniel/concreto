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
  padding: 1rem 0;
  width: 100%;

  display: flex;

  justify-content: center;
  align-items: center;
  gap: 7rem;

  div {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  h1 {
    font-size: 1.5rem;
    color: ${({theme})=> theme.COLORS.BLUE}
  }

  img {
    width: 15rem;
    @media(max-width: 1280px){
      display: none;
    }
  }
`;

export const Copyright = styled.div`
  background-color: ${({theme})=> theme.COLORS.BLUE};
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 10px;
  @media(max-width: 1280px){
      p {
        font-size: .6rem;
      }
    }
  
  p {
    color: ${({theme})=>theme.COLORS.WHITE}
  }
`;

