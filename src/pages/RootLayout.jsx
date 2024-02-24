import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function RootLayout() {
  return (
    <div class="bg-white pb-6 sm:pb-8 lg:pb-12">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
}
