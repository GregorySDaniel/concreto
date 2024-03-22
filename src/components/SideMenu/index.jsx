import { Container } from './styles'
import { Link, useLocation } from "react-router-dom"
import { BsList } from "react-icons/bs";
import { useState } from 'react';
import { IoMdClose } from "react-icons/io";


export function SideMenu(){
  const [isMenu, setIsMenu] = useState(false)
  return(
  <Container>
      <button onClick={()=> setIsMenu(true)}><BsList size={32}/></button>
        {isMenu && <ul>
        <li><button onClick={()=> setIsMenu(false)}><IoMdClose size={32}/></button></li>
        <li><a href="/" className={location.pathname === '/' ? 'active' : ''}>HOME</a></li>
        <li><a href="/sobre" className={location.pathname === '/sobre' ? 'active' : ''}>SOBRE</a></li>
        <li><a href="/projetos" className={location.pathname === '/projetos' ? 'active' : ''}>PROJETOS</a></li>
        <li><a href="/contato" className={location.pathname === '/contato' ? 'active' : ''}>CONTATO</a></li>
      </ul>}
  </Container>
  )
}