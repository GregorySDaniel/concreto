import { Container, Main } from "./styles"
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import backgoundImg from '../../assets/background.jpg'

export function Home(){
  return(
    <Container>
      <Header/>
        <Main>
            <div className="intro">
              <img src={backgoundImg} alt="Imagem de um Projeto" />
              <div className="gradient"></div>
              <h1>Qualidade em <br/>cada obra.</h1>
            </div>
        </Main>
      <Footer/>
    </Container>
  )
}