import "./header.css";
import logoAirbnb from "../../assets/logo.png";

export const Header = () => {
  return (
    <div>
      <header>
        <div className="logo-container">
          <img className="logo" src={logoAirbnb} alt="" />
        </div>
        <div className="flex-input">
          <div>
            <input type="text" />
          </div>
        </div>
        <a className="link" href="#/">
          Mettre mon logement sur Airbnb
        </a>
      </header>
    </div>
  );
};
