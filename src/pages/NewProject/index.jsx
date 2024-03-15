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
  const [imagesFile, setImagesFile] = useState(null);

  const navigate = useNavigate();

  async function handleSubmit(e){
    e.preventDefault();
    try {
      const fileUploadForm = new FormData();
      fileUploadForm.append("title", title);
      fileUploadForm.append("description", description);
      fileUploadForm.append("adress", adress);
      fileUploadForm.append("status", status);
      for (let i = 0; i < imagesFile.length; i++) {
        fileUploadForm.append("imgs", imagesFile[i]);
      }
      await api.post("/projetos", fileUploadForm);
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

  async function handleUploadImages(e){
    const files = e.target.files;
    setImagesFile(files);
  }

  console.log(imagesFile)

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
          <label>
            Imagens (até 5):
            <input type="file" multiple required onChange={handleUploadImages}/>
          </label>
          <button type="submit">Adicionar</button>
        </form>
      </Main>
      <Footer/>
    </Container>
  )
}