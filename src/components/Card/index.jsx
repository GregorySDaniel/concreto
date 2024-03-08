import { Container } from "./styles";

export function Card ({image, title, adress}) {
  return(
    <Container>
      <img src={image} alt={title} />
      <section>
      <h1>{title}</h1>
      <p>{adress}</p>
      </section>
    </Container>
  )
}