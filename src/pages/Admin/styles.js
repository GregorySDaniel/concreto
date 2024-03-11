import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 99vh;
  display: grid;
  gap: 100px;

  grid-template-rows: 80px auto 50px;
  grid-template-areas: 
  "header"
  "content"
  "footer";
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 10px;

  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;

  form {
    display: flex;
    flex-direction: column;
  }

  form label {
    margin-bottom: 10px;
  }

  input {
    display: flex;
    flex-direction: column;
    padding: 5px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 3px;
  }

  button {
    padding: 5px 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 3px;
    cursor: pointer;
  }

  button:hover{
    background-color: #0056b3;
  }
`;