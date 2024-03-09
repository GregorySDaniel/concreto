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
            <p>
              A empresa Concreto Construções e Empreendimentos Ltda, localizada em <strong>Tijucas/SC</strong>, é uma empresa do ramo da construção civil, que vem crescendo com confiança e solidez.
            </p>
            <p>
            Atuamos na construção de condomínio de casas e apartamentos, buscando em cada novo empreendimento inovar e superar expectativas. Sempre prezando pela qualidade, pela ética, transparência e respeito, pilares que nos tornaram uma referência na região.
            </p>
            <p>
            Nossos empreendimentos se destacam pela atenção aos detalhes, pelo cumprimento rigoroso de prazos e uso de materiais de alta qualidade, garantindo assim a satisfação de nossos clientes.
            </p>
          </div>
        </AboutUs>
        <TagsSection>
          <div>
           <FcOk/>
           <h1>10+</h1> 
           <p>Projetos Completados</p>
          </div>
          <div>
            <FcStatistics/>
           <h1>6</h1>
           <p>Anos no negócio</p>
          </div>
          <section>
            <h1>6 anos de experiência</h1>
            <p>Desde 2017, nossa empresa tem se destacado na prestação de serviços de construção para clientes em Tijucas e região.</p>
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