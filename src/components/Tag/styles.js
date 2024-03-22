import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  
  background-image: linear-gradient(to bottom, #ffffff, #f0f0f0); 

  width: 18rem;
  padding: 1.2rem;
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
    font-size: 3rem;
  }

  h1 {
    font-size: 1.5rem;
    text-align: center;
  }

  p {
    text-align: center;
  }
`;