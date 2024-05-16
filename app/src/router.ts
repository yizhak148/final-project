import { createBrowserRouter } from "react-router-dom";
import { Productloader } from "./App";
import Register from "./register";
import login from "./login";
import App from "./App";
import dashboard from "./dashboard";

export const router = createBrowserRouter([
  {
    index: true,
    Component: App,
    loader: Productloader,
  },
  { path: "/login", Component: login },
  { path: "/register", Component: Register },
  { path: "/admin", Component: dashboard }
])
