import { useState } from "react";
import Footer from "./components/footer/Footer";
import NavBar from "./components/navbar/NavBar";
import Landing from "./pages/landing/Landing";

export default function App() {
  
  const [selectedPage, setSelectedPage] = useState("/");

  return (
    <>
      <NavBar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <Landing />
      <Footer />
    </>
  );
}
