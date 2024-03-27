import "./App.css";
import Slide from "./pages/CarouselSection/Slide";
import Deliver from "./pages/Deliver/Deliver";
import Features from "./pages/Features/Features";
import ManagementOne from "./pages/Management/ManagementOne";
import ManagementTwo from "./pages/Management/ManagementTwo";
import Banner from "./pages/banner/Banner";
import Footer from "./pages/footer/Footer";
import HowWorks from "./pages/howWorks/HowWorks";
import Modules from "./pages/modules/Modules";
import { NavbarDefault } from "./pages/navbar/Navbar";
import SellServe from "./pages/sellserve/SellServe";
import Trust from "./pages/trust/Trust";

function App() {
  return (
    <div>
      <NavbarDefault />
      <Banner />
      <Features />
      <ManagementOne />
      <ManagementTwo />
      <Trust />
      <SellServe />
      <Modules />
      <HowWorks />
      <Slide />
      <Deliver />
      <Footer />
    </div>
  );
}

export default App;
