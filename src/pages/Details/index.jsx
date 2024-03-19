import { Container, Main, Slide } from './styles.js'
import {Header} from '../../components/Header'
import {Footer} from '../../components/Footer'
import { api } from '../../services/api'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export function Details(){
    const {id} = useParams();
    const [project, setProject] = useState(null);
    const [images, setImages] = useState([])
    
    useEffect(() => {
        async function fetchData() {
            try {
                const data = await api.get(`/projetos/${id}`);
                setProject(data);
                
                const imagesPromises = data.data.imgs.map(async (image) => {
                    const img = await api.get(`${api.defaults.baseURL}/files/${image.img}`);
                    return img.config.url;
                });

                const imagesUrls = await Promise.all(imagesPromises);
                setImages(imagesUrls);
                
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
                        <Slide>
                        <Swiper
                        className="mySwiper"
                        modules={[Navigation, Pagination]}
                        spaceBetween={50}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}>
                        {images.map((img, index) => (
                            <SwiperSlide className="swiper-slide" key={index}>
                                <img src={img} alt='Imagem do empreendimento'/>
                            </SwiperSlide>
                        ))}
                        </Swiper>
                        </Slide>
                        <section>
                        <h1>{project.data.project.title}</h1>
                        <><p><strong>Endereço:</strong></p> <p>{project.data.project.adress}</p></>
                        <><p><strong>Descrição:</strong></p> <p>{project.data.project.description}</p></>
                        <><p><strong>Status:</strong></p> <p>{(project.data.project.status="done") ? "Finalizado" : "Em progresso"}</p></>
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

