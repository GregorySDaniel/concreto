import { Container, Main, AboutUs, TagsSection } from './styles'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Button } from '../../components/Button'
import img from '../../assets/background1.jpg'
import { Link } from 'react-router-dom'
import { FcStatistics, FcOk } from "react-icons/fc";


export function About () {
  return(
    <Container>
      <Header/>
      <Main>  
        <AboutUs>
          <img src={img} alt="" />
          <div>
          <p>A Construtora Concreto, localizada em <strong>Tijucas</strong>, é uma empresa renomada no ramo da construção civil, com mais de 5 anos de experiência e mais de 10 projetos realizados com sucesso. Nosso compromisso com a excelência e a qualidade nos projetos nos tornou referência na região.</p>  
          <p>Nos destacamos pela atenção aos detalhes, cumprimento rigoroso de prazos e uso de materiais de alta qualidade, garantindo a satisfação de nossos clientes. </p>
          </div>
        </AboutUs>
        <TagsSection>
          <div>
           <FcOk/>
           <h1>10</h1> 
           <p>Projetos Completados</p>
          </div>
          <div>
            <FcStatistics/>
           <h1>5</h1>
           <p>Anos no negócio</p>
          </div>
          <section>
            <h1>5 anos de experiência</h1>
            <p>Desde 2018, nossa empresa tem se destacado na prestação de serviços de construção para clientes em Tijucas.</p>
            <Link to="/contato">
              <Button title="Entre em Contato"/>
            </Link>
          </section>
        </TagsSection>
      </Main>
      <Footer/>
    </Container>
  )
}