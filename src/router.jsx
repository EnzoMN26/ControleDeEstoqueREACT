import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import DashBoard from "./components/DashBoard";
import Items from "./components/Items";
import VerItem from "./components/VerItem";
import NovoItem from "./components/NovoItem";
import AtualizaItem from "./components/AtualizaItem";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "",
        element: <DashBoard />,
      },
      {
        path: "itens",
        element: <Items />,
      },
      {
        path: "novoitem",
        element: <NovoItem />,
      },
      {
        path: "veritem/:id",
        element: <VerItem />,
      },
      {
        path: "atualizaItem/:id",
        element: <AtualizaItem />,
      },
    ],
  },
]);

export default router;
