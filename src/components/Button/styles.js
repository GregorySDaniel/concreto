import styled from "styled-components";

export const Container = styled.button`
 background-color: ${({theme})=> theme.COLORS.BLUE};
 color: ${({theme})=> theme.COLORS.WHITE};
 
 border: 0;
 border-radius: 20px;

 padding: 5% 20%;
 
 font-weight: 500;
 font-size: 20px;

 transition: transform 0.2s;

&:hover{
  transform: scale(1.1);
}
`