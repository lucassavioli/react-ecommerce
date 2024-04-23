import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CartContextProvider } from "../store/CartContext";

export default function RootLayout() {
  return (
    <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
      <CartContextProvider>
        <Navbar />
        <Outlet />
        <Footer />
      </CartContextProvider>
    </div>
  );
}
