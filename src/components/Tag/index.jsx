import { Container } from "./styles";

export function Tag({title, text, icon}){
  return(
   <Container>
      {icon}
      <h1>{title}</h1>
      <p>{text}</p>
   </Container> 
  )
}