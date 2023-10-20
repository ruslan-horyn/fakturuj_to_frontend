import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Products from "./view/Products";
import ErrorPage from "./view/ErrorPage";
import AddProduct from "./view/AddProduct";
import UpdateProduct from "./view/UpdateProduct";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/products/:id/edit",
    element: <UpdateProduct />,
  },
  {
    path: "/products/add",
    element: <AddProduct />,
  }
]);

function App() {
  return <RouterProvider router={router} />
}

export default App
