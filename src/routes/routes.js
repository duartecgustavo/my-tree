import { createBrowserRouter } from "react-router-dom";
import Login from "../screens/login";
import Cadastro from "../screens/cadastro";
import Home from "../screens/home";
import PaginaNaoEncontrada from "../screens/pagina-nao-encontrada";
import InformacoesDeCuidado from "../screens/informacoes-de-cuidado";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
    },
    {
        path: "cadastro",
        element: <Cadastro />,
    },
    {
        path: "home",
        element: <Home />,
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