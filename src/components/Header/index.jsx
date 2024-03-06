import { Container } from "./styles"
import Logo from "../../assets/logo.png"

export function Header(){
  return(
    <Container>
      <img src={Logo} alt="Logo da Concreto" />
      <div>
        <a href="#">HOME</a>
        <a href="#">SOBRE</a>
        <a href="#">PROJETOS</a>
        <a href="#">CONTATO</a>
      </div>
    </Container>
  )
}