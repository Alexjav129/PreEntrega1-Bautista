import CartWidget from "../CartWidget/CartWidget";
import MainLogo from "../MainLogo/MainLogo";
import "./NavBar.scss";

const NavBar = () => {
  return (
    <header>
      <div className="logoAndName">
        <MainLogo />
        <h1>Aura</h1>
      </div>

      <nav>
        <ul>
          <li>Necklaces</li>
          <li>Rings</li>
          <li>Water Bottles</li>
        </ul>
      </nav>

      <CartWidget />
    </header>
  );
};

export default NavBar;
