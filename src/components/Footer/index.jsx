import { Container, Info, Copyright } from "./styles"
import Logo from "../../assets/footer-logo.png"
import { MdEmail } from "react-icons/md";

export function Footer(){
  return(
    <Container>
      <Info>
        <img src={Logo} alt="Logo da Concreto" />
        <div>
          <h1>Contato:</h1>
          <p><strong>Email:</strong> concreto.tijucas@gmail.com</p>
          <p><strong>Telefone:</strong> (48) 99699-0112</p>
        </div>
      </Info>
      <Copyright>
        <p>© 2024 Concreto Construções e Empreendimentos. Todos os direitos reservados.</p>
      </Copyright>
    </Container>
  )
}