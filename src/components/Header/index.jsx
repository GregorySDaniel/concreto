import { Container } from "./styles"
import Logo from "../../assets/logo.png"

export function Header(){
  return(
    <Container>
      <img src={Logo} alt="Logo da Concreto" />
      <div>
        <a href="#">Home</a>
        <a href="#">Sobre</a>
        <a href="#">Projetos</a>
        <a href="#">Contato</a>
      </div>
    </Container>
  )
}