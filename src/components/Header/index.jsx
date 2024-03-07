import { Container } from "./styles"
import Logo from "../../assets/logo.png"
import { Link } from "react-router-dom"


export function Header(){
  return(
    <Container>
      <Link to="/">
        <img src={Logo} alt="Logo da Concreto" />
      </Link>
      <div>
        <a href="/">HOME</a>
        <a href="/sobre">SOBRE</a>
        <a href="/projetos">PROJETOS</a>
        <a href="/contato">CONTATO</a>
      </div>
    </Container>
  )
}