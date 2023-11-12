import { createBrowserRouter } from "react-router-dom";
import Home from "../screens/home";
import InformacoesDeCuidado from "../screens/informacoes-de-cuidado";
import Login from "../screens/login";
import PaginaNaoEncontrada from "../screens/pagina-nao-encontrada";
import Profile from "../screens/profile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "home",
    element: <Home />,
  },
  {
    path: "home/profile",
    element: <Profile />,
  },
  {
    path: "home/informacoes-de-cuidado",
    element: <InformacoesDeCuidado />,
  },
  {
    path: "*",
    element: <PaginaNaoEncontrada />,
  },
]);
