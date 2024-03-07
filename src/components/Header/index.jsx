import { Container } from "./styles"
import Logo from "../../assets/logo.png"


export function Header(){
  return(
    <Container>
      <img src={Logo} alt="Logo da Concreto" />
      <div>
        <a href="/">HOME</a>
        <a href="/sobre">SOBRE</a>
        <a href="/projetos">PROJETOS</a>
        <a href="/contato">CONTATO</a>
      </div>
    </Container>
  )
}