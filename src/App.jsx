import { BrowserRouter, RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import ProductDetail from "./pages/ProductDetail";
import ProductsGrid from "./components/ProductsGrid";

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
      }
    ]
  }
]);

export default function App() {
  return <RouterProvider router={router} />
}