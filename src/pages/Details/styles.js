import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  gap: 100px;

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
  width: 99vw;
  align-items: center;
  padding: 0 250px;

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
      margin: 60px 0;
      padding: 30px 250px;
      p, a {
        font-size: 18px;
        color: ${({theme})=>theme.COLORS.TEXT};
      }
      
      h1 {
        text-align: center;
        font-size: 36px;
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
  padding: 0 350px;
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