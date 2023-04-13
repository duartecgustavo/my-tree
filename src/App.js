import {
  RouterProvider
} from "react-router-dom";
import GlobalStyles from './styles/global.style';
import { router } from "./routes/routes";

function App() {
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
