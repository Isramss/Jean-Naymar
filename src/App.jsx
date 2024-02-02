import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navBar";
import Apropos from "./pages/about";
import Accueil from "./pages/accueil";
import ErrorBooks from "./pages/errorBooks";
import Layout from "./pages/Layout";
import Oeuvre from "./pages/oeuvre";

function App() {
  return (
    <Routes>
      {/* <NavBar /> */}
      <Route path="/" element={<Layout />}>
        <Route path="/accueil" element={<Accueil />} />
        <Route path="/about" element={<Apropos />} />
        <Route path="/books" element={<Oeuvre />} />
        <Route path="/books/:id" element={<ErrorBooks />} />
      </Route>
    </Routes>
  );
}

export default App;
