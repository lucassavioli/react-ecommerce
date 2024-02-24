import { BrowserRouter, RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import ProductDetail from "./pages/ProductDetail";
import ProductsGrid from "./components/ProductsGrid";
import Cart from "./pages/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <ProductsGrid />
      },
      {
        path: "product/:id",
        element: <ProductDetail />
      },
      {
        path: "cart",
        element: <Cart />
      }
    ]
  }
]);

export default function App() {
  return <RouterProvider router={router} />
}