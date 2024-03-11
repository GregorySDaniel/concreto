import { Routes, Route } from 'react-router-dom'
import { Dashboard } from '../pages/Dashboard'

export function AdminRoutes(){
  return(
    <Routes>
      <Route path="/dashboard" element={<Dashboard/>}/>
    </Routes>
  )
}