import { BrowserRouter, useRoutes } from "react-router-dom";
//import Home from "../Home";
import MyAccount from "../MyAccount";
import MyOrder from "../MyOrder";
import MyOrders from "../MyOrders";
import NotFound from "../NotFound";
import SignIn from "../SignIn";
import NavBar from "../Components/NavBar/index.jsx";
import "./App.css";
import ExampleComponent from "../Components/Example/ExampleComponent.tsx";

const InitialRoutes = () => {
  let routes = useRoutes([
    {
      path: "/",
      element: <ExampleComponent/>,
    },
    {
      path: "/my-order",
      element: <MyOrder />,
    },
    {
      path: "/my-orders",
      element: <MyOrders />,
    },
    {
      path: "/my-account",
      element: <MyAccount />,
    },
    {
      path: "/sign-in",
      element: <SignIn />,
    },
    {
      path: "/*",
      element: <NotFound />,
    },
  ]);
  return routes;
};

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <InitialRoutes />
      </BrowserRouter>
    </>
  );
};

export default App;
