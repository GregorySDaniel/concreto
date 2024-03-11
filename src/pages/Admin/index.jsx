import { Container, Main } from './styles'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { useState } from 'react'

export function Admin(){
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  console.log(username)
  console.log(password)

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return(
    <Container>
      <Header/>
      <Main>
        <h2>Login</h2>
        <form>
          <label>
            Username:
            <input type="text" value={username} onChange={handleUsernameChange} />
          </label>
          <br />
          <label>
            Password:
            <input type="password" value={password} onChange={handlePasswordChange} />
          </label>
          <br />
          <button type="submit">Login</button>
        </form>
      </Main>
      <Footer/>
    </Container>
  )
}