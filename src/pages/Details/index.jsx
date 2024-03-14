import { Container, Main } from './styles.js'
import {Header} from '../../components/Header'
import {Footer} from '../../components/Footer'
import {Button} from '../../components/Button'
import { api } from '../../services/api'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import img from '../../assets/bg3.png'

export function Details(){
    const {id} = useParams();
    const [project, setProject] = useState(null);
    console.log(project)

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await api.get(`/projetos/${id}`);
                setProject(data);
            } catch (e) {
                if (e.message) {
                    alert(e.message);
                } else {
                    alert("Não foi possível buscar os dados do empreendimento");
                }
            }
        }
        fetchData();
    }, [id]);

    return(
        <Container>
            <Header/>
            <Main>
                {project ? (
                    <div>
                        <img src={img} alt="Imagem do Empreendimento" />
                        <section>
                        <h1>{project.data.title}</h1>
                        <><p><strong>Endereço:</strong></p> <p>{project.data.adress}</p></>
                        <><p><strong>Descrição:</strong></p> <p>{project.data.description}</p></>
                        <><p><strong>Status:</strong></p> <p>{(project.data.status="done") ? "Finalizado" : "Em progresso"}</p></>
                        <><p>Para mais informações <strong><a href="/contato">entre em contato.</a></strong></p></>
                        </section>
                    </div>
                ) : (
                    <p>Carregando...</p>
                )}
                
            </Main>
            <Footer/>
        </Container>
    )
}
