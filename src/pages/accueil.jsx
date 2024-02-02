import React from "react";
import { Link } from "react-router-dom";

function Accueil() {
  return (
    <div className="accueil">
      <h1>Prochainement en librairie!</h1>
      <div className="livre_accueil">
        <Link to="/books/2">
          <img
            src="https://jean-neymar.netlify.app/static/media/cover2.55ab26d3.jpg"
            alt="livre"
          />
        </Link>
        <h2>Il me reste encore un œil</h2>
        <p>
          « Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt
          molestias dolorum expedita necessitatibus rem ullam vel consectetur
          sapiente porro. Magnam, aspernatur maiores debitis deleniti iure illo
          dolore libero consectetur consequuntur! »
        </p>
      </div>
    </div>
  );
}

export default Accueil;
