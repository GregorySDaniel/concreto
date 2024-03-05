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

  .intro {
    position: relative;

    h1 {
      position: absolute;
      top: 500px;
      left: 300px;
      font-size: 84px;
    }

    img {
      width: 100%;
    }

    .gradient {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(to right, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));
    }
  }

`;
