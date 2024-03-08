import { Container, Main, ContactBox } from './styles'
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { MdEmail, MdWhatsapp } from "react-icons/md";

export function Contact(){
  return(
    <Container>
      <Header/>
        <Main>
        <ContactBox>
        <h1>Entre em contato</h1>
        <section>
          <a href="mailto:concreto.tijucas@gmail.com"><MdEmail/>E-mail</a>
          <a target="blank" href="https://wa.me/48996990112"><MdWhatsapp/>WhatsApp</a>
        </section>
        </ContactBox>
        </Main>
      <Footer/>
    </Container>
  )
};
