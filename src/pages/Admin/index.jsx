import { Container, Main } from './styles'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { useState } from 'react'
import { useAuth } from '../../hooks/auth'

export function Admin(){
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const { signIn } = useAuth();

  function handleSubmit(e){
    e.preventDefault();
    signIn({name, password})
  }
  return(
    <Container>
      <Header/>
      <Main>
        <h2>Login</h2>
        <form>
          <label>
            Name:
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
          </label>
          <br />
          <label>
            Password:
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
          </label>
          <br />
          <button type="submit" onClick={handleSubmit}>Login</button>
        </form>
      </Main>
      <Footer/>
    </Container>
  )
}