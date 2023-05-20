import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home/Home";
import Blog from "../pages/Blog/Blog";
import Login from "../pages/Authenticator/Login/Login";
import Regester from "../pages/Authenticator/Regester/Regester";
import AddToy from "../pages/AddToy/AddToy";
import MyToy from "../pages/MyToy/MyToy";
import AllToy from "../pages/AllToy/AllToy";
import UpdateToy from "../pages/Update/UpdateToy";
import ToyDEteils from "../pages/ToyDeteils/ToyDEteils";
import PrivetRouter from "./PrivetRouter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "regester",
        element: <Regester />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "addtoy",
        element: <PrivetRouter> <AddToy /> </PrivetRouter>,
      },
      {
        path: "mytoy",
        element:  <PrivetRouter> <MyToy /> </PrivetRouter> ,
      },
      {
        path: "alltoy",
        element: <AllToy />,
      },
      {
        path: "/update/:id",
        element: <UpdateToy />,
        loader: ({ params }) =>
          fetch(
            `https://toy-marketplace-server-theta-peach.vercel.app/update/${params.id}`
          ),
      },
      {
        path: "toydeteil/:id",
        element: <PrivetRouter> <ToyDEteils/> </PrivetRouter>,
        loader: ({params})=> fetch(`https://toy-marketplace-server-theta-peach.vercel.app/update/${params.id}`)
      }
    ],
  },
]);

export default router;
