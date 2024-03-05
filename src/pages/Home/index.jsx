import { Container, Main, Intro, Tags } from "./styles"
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import backgoundImg from '../../assets/background.jpg'

export function Home(){
  return(
    <Container>
      <Header/>
        <Main>
            <Intro>
              <img src={backgoundImg} alt="Imagem de um Projeto" />
              <div className="gradient"></div>
            </Intro>
            <Tags>
              <div>
                <h1>Titulo</h1>
                <p>descrição</p>
              </div>
              <div>
                <h1>Titulo</h1>
                <p>descrição</p>
              </div>
              <div>
                <h1>Titulo</h1>
                <p>descrição</p>
              </div>
            </Tags>

        </Main>
      <Footer/>
    </Container>
  )
}