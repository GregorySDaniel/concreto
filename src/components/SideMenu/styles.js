import styled from "styled-components";

export const Container = styled.div`

  display: none;

  @media (max-width:1280px) {
    display: block;
  }

  button {
    border: none;
    background: none;
    position: fixed;
    top: 1.5rem;
    right: 2rem;
  }

  ul {
    flex-direction: column;
    list-style: none;
    text-decoration: none;
    gap: 1rem;
    display: flex;
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 15rem;
    background-color: ${({theme}) => theme.COLORS.BLUE};
    padding-top: 3rem;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    z-index: 1000;
  }

  a {
    font-size: 2rem;
    color: ${({theme}) => theme.COLORS.WHITE};
  }

`;