import "./App.css";
import Features from "./pages/Features/Features";
import ManagementOne from "./pages/Management/ManagementOne";
import ManagementTwo from "./pages/Management/ManagementTwo";
import Banner from "./pages/banner/Banner";
import { NavbarDefault } from "./pages/navbar/Navbar";
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
    </div>
  );
}

export default App;
