import { Container, Main, Text, Grid } from './styles'
import { Card } from '../../components/Card'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { api } from '../../services/api'
import { useEffect, useState } from 'react'
import img from '../../assets/background2.jpg'


export function Projects(){
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function fetchData(){
      const response = await api.get("/projetos");
      setProjects(response.data.projects);
    }
    fetchData();
  }, [projects]);


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
        {projects.map((project)=>(
          <a key={project.id} href={`/projetos/${project.id}`}><Card image={img} title={project.title} adress={project.adress}/></a>
        )) }
      </Grid>
    </Main>
    <Footer/>
  </Container>
)
}