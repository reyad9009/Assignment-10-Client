import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../layouts/Home";
import Error from "../Error/Error";
import AddEquipment from "../components/AddEquipment";
import AllSportsEquipment from "../components/AllSportsEquipment";
import MyEquipment from "../components/MyEquipment";
import EquipmentDetails from "../components/EquipmentDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "all-sports-equipment",
        element: <AllSportsEquipment></AllSportsEquipment>,
        loader: () => fetch("http://localhost:5000/equipments"),
      },
      {
        path: "add-equipment",
        element: <AddEquipment></AddEquipment>,
      },
      {
        path: "my-equipment",
        element: <MyEquipment />,
      },
      {
        path: "/all-sports-equipment/details/:id", // Add :id here to capture the dynamic value
        element: <EquipmentDetails />,
        loader: ({ params }) => fetch(`http://localhost:5000/all-sports-equipment/details/${params.id}`),
      }
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
