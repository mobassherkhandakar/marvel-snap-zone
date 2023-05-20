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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "login",
        element: <Login/>
      },
      {
        path: "regester",
        element: <Regester/>
      },
      {
        path: "blog",
        element: <Blog/>
      },
      {
        path: "addtoy",
        element: <AddToy/>
      },
      {
        path: "mytoy",
        element: <MyToy/>
      },
      {
        path: "alltoy",
        element: <AllToy/>
      },
      {
        path: '/update/:id',
        element: <UpdateToy/>,
        loader: ({params})=> fetch(`http://localhost:5000/update/${params.id}`)
      }
    ],
  }
]);

export default router