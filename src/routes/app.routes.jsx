import { Routes, Route } from 'react-router-dom'

import { Home } from '../pages/Home'
import { About } from '../pages/About'
import { Contact } from '../pages/Contact'
import { Projects } from '../pages/Projects'
import { Admin } from '../pages/Admin'
import { Details } from '../pages/Details'

export function AppRoutes(){
  return(
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/sobre" element={<About/>}/>
      <Route path="/contato" element={<Contact/>}/>
      <Route path="/projetos" element={<Projects/>}/>
      <Route path="/projetos/:id" element={<Details/>}/>
      <Route path="/admin" element={<Admin/>}/>
    </Routes>
  )
}