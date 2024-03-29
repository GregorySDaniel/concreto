import { Container, Main, Grid } from './styles'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { useAuth } from '../../hooks/auth'
import { Button } from '../../components/Button'
import { Card } from '../../components/Card'
import { api } from '../../services/api'
import { useState, useEffect } from 'react'
import { TiDeleteOutline } from "react-icons/ti";
import { CiLogout } from "react-icons/ci";
import { Link } from 'react-router-dom'



export function Dashboard(){
  const { signOut } = useAuth();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function fetchData(){
      const response = await api.get("/projetos");
      const projectsWithImages = await Promise.all(response.data.projects.map(async (project) => {
        const img = await api.get(`${api.defaults.baseURL}/files/${project.img}`);
        return {...project, imageUrl: img.config.url};
      }));
      setProjects(projectsWithImages);
    }
    fetchData();
  }, [projects]);

  async function handleDelete(title, id){
    if(window.confirm(`Tem certeza que deseja deletar o empreendimento ${title}?`)){
      await api.delete(`/projetos/${id}`)
    }
  }

  return(
    <Container>
      <Header/>
      <Main>
        <Grid>
        {projects.map((project)=>(
          <div key={project.id}>
          <TiDeleteOutline size={32} onClick={()=> {handleDelete(project.title, project.id)}}/>
          <a href={`/projetos/${project.id}`}><Card image={project.imageUrl} title={project.title} /></a>
          </div>
        )) }
        </Grid>
        <section>
        <Link to= "/new">
        <Button title="Adicionar projeto"/>
        </Link>
        <CiLogout onClick={signOut}/>
        </section>
      </Main>
      <Footer/>
    </Container>
  )
}