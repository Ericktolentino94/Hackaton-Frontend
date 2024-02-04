import { Link } from "react-router-dom";
import "./NavBar.css";
import "../assets/Watercolor Food Logo (1).png";

export default function NavBar() {
  return (
    <div className="navbar">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <div className="container-fluid">
          <div>
            <Link to="/loggedInPage">User </Link>

            <Link to="/maps"> Maps </Link>

            <Link to="/places"> Saved Places </Link>
          </div>
          <span className="navbar-text">Thrifty Eats</span>
        </div>
      </nav>
    </div>
  );
}
