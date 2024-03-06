import { Container, Label, Form, Textarea, Input, Main } from './styles'
import { useState } from 'react';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

export function Contact(){
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Nome:', name);
    console.log('Email:', email);
    console.log('Mensagem:', message);
  };

  const handleWhatsApp = () => {
    console.log('Abrir conversa no WhatsApp');
  };

  return (
    <Container>
      <Header/>
      <Main>
        <h1>Entre em Contato</h1>
        <Form onSubmit={handleSubmit}>
          <Label>
            Nome:
            <Input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Label>
          <Label>
            Email:
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Label>
          <Label>
            Mensagem:
            <Textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </Label>
          <Button type="submit" title="Enviar Email"/>
        </Form>
        <Button onClick={handleWhatsApp} title="Chamar no Whatsapp"/>
      </Main>
      <Footer/>
    </Container>
  );
};
