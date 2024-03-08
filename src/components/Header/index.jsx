import { Container } from "./styles"
import Logo from "../../assets/logo.png"
import { Link, useLocation } from "react-router-dom"


export function Header(){
  const location = useLocation();
  return(
    <Container>
      <Link to="/">
        <img src={Logo} alt="Logo da Concreto" />
      </Link>
      <ul>
        <li><a href="/" className={location.pathname === '/' ? 'active' : ''}>HOME</a></li>
        <li><a href="/sobre" className={location.pathname === '/sobre' ? 'active' : ''}>SOBRE</a></li>
        <li><a href="/projetos" className={location.pathname === '/projetos' ? 'active' : ''}>PROJETOS</a></li>
        <li><a href="/contato" className={location.pathname === '/contato' ? 'active' : ''}>CONTATO</a></li>
      </ul>
    </Container>
  )
}