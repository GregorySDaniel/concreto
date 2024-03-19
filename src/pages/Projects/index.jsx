import { Container, Main, Text, Grid } from './styles'
import { Card } from '../../components/Card'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { api } from '../../services/api'
import { useEffect, useState } from 'react'
import img from '../../assets/background2.jpg'


export function Projects(){
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  

  useEffect(() => {
    async function fetchData(){
      const response = await api.get("/projetos");
      const projectsWithImages = await Promise.all(response.data.projects.map(async (project) => {
        const img = await api.get(`${api.defaults.baseURL}/files/${project.img}`);
        return {...project, imageUrl: img.config.url};
      }));
      setProjects(projectsWithImages);
      setFilteredProjects(projectsWithImages);
    }
    fetchData();
  }, []); 

  
  function handleFilter(status) {
    const filtered = projects.filter(project => project.status === status);
    setFilteredProjects(filtered);
  }
  
  return(
    <Container>
    <Header/>
    <Main>  
      <Text>
        <h1>Projetos</h1>
        <section>
          <ul>
              <li><button onClick={() => setFilteredProjects(projects)}><p>Todos</p></button></li>
              <li><button onClick={() => handleFilter('progress')}><p>Em andamento</p></button></li>
              <li><button onClick={() => handleFilter('done')}><p>Concluídos</p></button></li>
          </ul>
        </section>
      </Text>
      <Grid>
        {filteredProjects.map((project)=>(
          <a key={project.id} href={`/projetos/${project.id}`}><Card image={project.imageUrl} title={project.title} adress={project.adress}/></a>
        )) }
      </Grid>
    </Main>
    <Footer/>
  </Container>
)
}