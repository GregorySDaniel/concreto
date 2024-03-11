import { BrowserRouter } from "react-router-dom";

import { AppRoutes } from "./app.routes";
import { AdminRoutes } from "./admin.routes";

export function Routes() {
  return(
    <BrowserRouter>
      <AppRoutes/>
    </BrowserRouter>
  )
}