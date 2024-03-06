import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vw;
  display: grid;

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

`;

export const Intro = styled.div`
  position: relative;

  img {
    width: 100%;
  }

  .gradient {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0));
  }
`;

export const Tags = styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;

  padding: 0 200px;

  margin-top: 100px;

  align-items: center;
  justify-content: space-around;

`;
