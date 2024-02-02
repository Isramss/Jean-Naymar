import React from "react";
import { Link as RouterLink } from "react-router-dom";

function NavBar() {
  return (
    <aside className="sideBar">
      <RouterLink to="/accueil">
        <h1>Jean Neymar</h1>
      </RouterLink>

      <nav className="sideBar_liens">
        <RouterLink to="/accueil">
          <li>Accueil</li>
        </RouterLink>

        <RouterLink to="/about">
          <li>À propos</li>
        </RouterLink>

        <RouterLink to="/books">
          <li>Oeuvres</li>
        </RouterLink>
      </nav>
    </aside>
  );
}

export default NavBar;
