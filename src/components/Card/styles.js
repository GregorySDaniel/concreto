import styled from "styled-components";

export const Container = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;

 color: ${({theme})=>theme.COLORS.WHITE};
 background-color: ${({theme})=>theme.COLORS.BLUE};

 width: 100%;

 section {
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 20px;
 }
 img {
  width: 100%;
  height: 100%;
 }
 transition: transform 0.2s;

  &:hover{
  transform: scale(1.05);
  }
`