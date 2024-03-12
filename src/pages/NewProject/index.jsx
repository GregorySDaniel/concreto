import {Container, Main} from './styles'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { useState } from 'react'
import { api } from '../../services/api'
import { useNavigate } from 'react-router-dom'

export function NewProject(){
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [adress, setAdress] = useState("");
  const [status, setStatus] = useState("done");

  const navigate = useNavigate();

  async function handleSubmit(e){
    e.preventDefault();
    try {
      await api.post("/projetos", {title, description, adress, status});
      alert("Empreendimento adicionado com sucesso!")
      navigate("/admin");
    } catch (e) {
      if(e.message){
        alert(e.message)
      } else {
        alert("Não foi possivel adicionar novo empreendimento.")
      }
    }
  }

  return(
    <Container>
      <Header/>
      <Main>
      <h2>Novo Projeto</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input type="text" value={title} onChange={e => setTitle(e.target.value)} required/>
          </label>
          <label>
            Endereço:
            <input type="text" value={adress} onChange={e => setAdress(e.target.value)} required/>
          </label>
          <label>
            Status:
            <select value={status} onChange={e => setStatus(e.target.value)} required>
              <option value="done">Concluido</option>
              <option value="progress">Em andamento</option>
            </select>
          </label>
          <label>
            Descrição:
            <textarea type="text" value={description} onChange={e => setDescription(e.target.value)} required/>
          </label>
          <button type="submit">Adicionar</button>
        </form>
      </Main>
      <Footer/>
    </Container>
  )
}