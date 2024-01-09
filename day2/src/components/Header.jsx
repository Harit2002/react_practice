import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  return (
    <div className="bg-slate-50 flex justify-between items-center mr-8">
      <div className="logo-container">
        <img src={LOGO_URL} alt="" width={60} />
      </div>

      <div className="nav-item">
        <ul className="flex gap-8 flex-row">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
