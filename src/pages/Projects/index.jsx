import { Container, Main, Text, Grid } from './styles'
import { Card } from '../../components/Card'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import img from '../../assets/background2.jpg'

export function Projects(){
  const data = [{id: 1, image: img, title: "Residencial Concreto X", adress: "2715 Ash Dr. San Jose, South Dakota"}, 
  {id: 2, image: img, title: "Residencial Concreto 2", adress: "2715 Ash Dr. San Jose, South Dakota"}, 
  {id: 3, image: img, title: "Residencial Concreto 2", adress: "2715 Ash Dr. San Jose, South Dakota"}, 
  {id: 4, image: img, title: "Residencial Concreto 2", adress: "2715 Ash Dr. San Jose, South Dakota"}]
return(
  <Container>
    <Header/>
    <Main>  
      <Text>
        <h1>Projetos</h1>
        <section>
          <p>Todos</p>
          <p>Em andamento</p>
          <p>Concluidos</p>
        </section>
      </Text>
      <Grid>
        {data.map((card)=>(
          <Card key={card.id} image={card.image} title={card.title} adress={card.adress}/>
        ))}
      </Grid>
    </Main>
    <Footer/>
  </Container>
)
}