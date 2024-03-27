import "./App.css";
import Features from "./pages/Features/Features";
import ManagementOne from "./pages/Management/ManagementOne";
import Banner from "./pages/banner/Banner";
import { NavbarDefault } from "./pages/navbar/Navbar";

function App() {
  return (
    <div>
      <NavbarDefault />
      <Banner />
      <Features />
      <ManagementOne />
    </div>
  );
}

export default App;
