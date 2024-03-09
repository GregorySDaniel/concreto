import { Container, Main, Intro, Tags, Contact } from "./styles"
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Button } from '../../components/Button'
import { Tag } from '../../components/Tag'
import { Link } from "react-router-dom"
import backgoundImg from '../../assets/background.jpg'
import { FcOvertime, FcCollaboration, FcLandscape } from "react-icons/fc";


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
              <Tag 
                title="Experiência de mercado" 
                text="Com mais de 5 anos de experiência no mercado, nossa construtora se destaca pela qualidade e excelência em cada projeto. Ao longo dos anos, construímos um sólido histórico de sucesso, transformando ideias em realidade e construindo sonhos que perduram por gerações." 
                icon={<FcOvertime/>}/>
              <Tag 
                title="Transparência e Honestidade" 
                text="Na nossa construtora, valorizamos a transparência e a honestidade em todas as nossas interações. Desde o primeiro contato até a conclusão do projeto, você pode contar conosco para fornecer informações claras, honestas e precisas sobre cada aspecto do seu projeto." 
                icon={<FcCollaboration/>}/>
              <Tag 
                title="Responsabilidade Ambiental" 
                text="Na nossa construtora, a preocupação com o meio ambiente está presente em cada projeto. Utilizamos práticas sustentáveis, buscando reduzir o impacto ambiental. Nosso compromisso vai além da construção civil, é um compromisso com o futuro das próximas gerações." 
                icon={<FcLandscape/>}/>
            </Tags>

            <Contact>
              <div>
                <h1>Larga experiência no setor de construção civil.</h1>
                <p>Mais de 2.000 m² de área construída desde 2017, <br />a Construtora Concreto atua em Tijucas e região.</p>
                <section>
                  <Link to ="/sobre">
                    <Button title="SAIBA MAIS"/>
                  </Link>
                  <Link to ="/contato">
                    <Button title="ENTRE EM CONTATO"/>
                  </Link>
                </section>
              </div>
              <div>
                <p>+ de</p>
                <h1>2.000m²</h1>
                <p>de área construida</p>
              </div>
            </Contact>

        </Main>
      <Footer/>
    </Container>
  )
}