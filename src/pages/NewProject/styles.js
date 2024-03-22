import styled from "styled-components";

export const Container = styled.div`
  width: 99vw;
  height: 100vh;
  display: grid;
  
  grid-template-rows: 5rem auto 3rem;
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
  padding: 6rem;
  border: 1px solid #ccc;
  border-radius: 5px;

  form div {
    display: flex;
    gap: 1rem;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 30rem;
    
  }
  
  select {
    padding: 5px;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 3px;
    display: flex;
    overflow-y: hidden;
  }


  option {
    background-color: #f9f9f9;
    padding: 5px;
  }


  option:hover {
    background-color: #e9e9e9;
  }


  option:checked {
    background-color: #ddd;
  }

  form label {
    margin-bottom: 10px;
  }

  input, textarea {
    display: flex;
    flex-direction: column;
    padding: 5px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 3px;
    width: 100%;
  }

  textarea{
    height: 8rem;
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