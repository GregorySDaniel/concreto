import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  gap: 6rem;

  grid-template-rows: 5rem auto 3rem;
  grid-template-areas: 
  "header"
  "content"
  "footer";
`;

export const Main = styled.div`
  grid-area: content;
  display: flex;
  flex-direction: column;
  width: 99vw;
  align-items: center;
  padding: 0 15rem;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 10px;


    a {
      width: 100%;
    }

    section {
      display: flex;
      flex-direction: column;
      gap: 10px;
      text-align: left;
      margin: 3.2rem 0;
      padding: 2rem 15rem;
      p, a {
        font-size: 1rem;
        color: ${({theme})=>theme.COLORS.TEXT};
      }
      
      h1 {
        text-align: center;
        font-size: 2.2rem;
        margin-bottom: 10px;
      }
    }
  }


    img {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;  
  }
`;

export const Slide = styled.div`
  width: 99vw;
  padding: 0 20rem;
  height: 50vh;

  .mySwiper {
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;

    .swiper-slide {
      width: auto;
      height: auto;
    }
  }
`;