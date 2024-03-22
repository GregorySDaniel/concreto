import { Container, Main, Text, Grid } from './styles'
import { Card } from '../../components/Card'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { api } from '../../services/api'
import { SideMenu } from '../../components/SideMenu'
import { useEffect, useState } from 'react'


export function Projects(){
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [activeFilter, setActiveFilter] = useState('all');

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
    setActiveFilter(status);
    const filtered = status === 'all' ? projects : projects.filter(project => project.status === status);
    setFilteredProjects(filtered);
  }
  
  return(
    <Container>
    <Header/>
    <Main>
      <SideMenu/>
      <Text>
        <h1>Projetos</h1>
        <section>
          <ul>
              <li className={activeFilter === 'all' ? 'active' : ''}><button onClick={() => handleFilter('all')}><p>Todos</p></button></li>
              <li className={activeFilter === 'progress' ? 'active' : ''}><button onClick={() => handleFilter('progress')}><p>Em andamento</p></button></li>
              <li className={activeFilter === 'done' ? 'active' : ''}><button onClick={() => handleFilter('done')}><p>Concluídos</p></button></li>
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