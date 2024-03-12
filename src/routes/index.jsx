import { BrowserRouter } from "react-router-dom";
import { useAuth } from "../hooks/auth"
import { AppRoutes } from "./app.routes";
import { AdminRoutes } from "./admin.routes";

export function Routes() {
  const { user } = useAuth()
  console.log(user)
  return(
    <BrowserRouter>
      {user ? <AdminRoutes/> : <AppRoutes/>}
    </BrowserRouter>
  )
}