import { Container, Main, Intro, Tags } from "./styles"
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Tag } from '../../components/Tag'
import backgoundImg from '../../assets/background.jpg'
import { IoConstruct, IoLeafSharp } from "react-icons/io5";
import { MdHandshake } from "react-icons/md";


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
                text="Com mais de 10 anos de experiência no mercado, nossa construtora se destaca pela qualidade e excelência em cada projeto. Ao longo dos anos, construímos um sólido histórico de sucesso, transformando ideias em realidade e construindo sonhos que perduram por gerações." 
                icon={<IoConstruct/>}/>
              <Tag 
                title="Transparência e Honestidade" 
                text="Na nossa construtora, valorizamos a transparência e a honestidade em todas as nossas interações. Desde o primeiro contato até a conclusão do projeto, você pode contar conosco para fornecer informações claras, honestas e precisas sobre cada aspecto do seu projeto." 
                icon={<MdHandshake/>}/>
              <Tag 
                title="Responsabilidade Ambiental" 
                text="Na nossa construtora, a preocupação com o meio ambiente está presente em cada projeto. Utilizamos práticas sustentáveis, buscando reduzir o impacto ambiental. Nosso compromisso vai além da construção civil, é um compromisso com o futuro das próximas gerações." 
                icon={<IoLeafSharp/>}/>
            </Tags>

        </Main>
      <Footer/>
    </Container>
  )
}