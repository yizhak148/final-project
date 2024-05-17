import { createBrowserRouter } from "react-router-dom";
import { ProductLoader } from "./App";
import Register from "./register";
import login from "./login";
import App from "./App";
import dashboard from "./dashboard";

export const router = createBrowserRouter([
  {
    index: true,
    Component: App,
    loader: ProductLoader,
  },
  { path: "/login", Component: login },
  { path: "/register", Component: Register },
  { path: "/admin", Component: dashboard }
])
