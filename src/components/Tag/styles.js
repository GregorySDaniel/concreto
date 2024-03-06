import styled from "styled-components";

export const Container = styled.div`
  border: 2px solid ${({theme})=>theme.COLORS.BLUE};
  border-radius: 8px;
  background-color: ${({theme})=>theme.COLORS.BLUE_100};

  width: 300px;
  padding: 20px;
  gap: 10px;
  
  display: flex;
  flex-direction: column;
  align-items: center;

  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.4);

  transition: transform 0.2s;

  &:hover{
    transform: scale(1.1);
  }

  svg {
    font-size: 50px;
  }

  h1 {
    font-size: 24px;
    text-align: center;
  }

  p {
    text-align: center;
  }
`;