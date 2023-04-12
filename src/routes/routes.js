import { createBrowserRouter } from "react-router-dom";
import Login from "../screens/login";
import Cadastro from "../screens/cadastro";
import Home from "../screens/home";
import PaginaNaoEncontrada from "../screens/pagina-nao-encontrada";

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
        path: "*",
        element: <PaginaNaoEncontrada />,
    },
]);