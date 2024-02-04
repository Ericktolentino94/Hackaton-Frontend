import { Link } from "react-router-dom";
import "./NavBar.css";
import "../assets/Hackathon-Logo.png";

export default function NavBar() {
  return (
    <div className="navbar">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <div className="container-fluid">
          <img className="logo" src="src/assets/Hackathon-Logo.png" />
          <span className="navbar-text">Thrifty Eats</span>
          <div>
            <Link to="/loggedInPage">User </Link>

            <Link to="/maps"> Maps </Link>

            <Link to="/places"> Saved Places </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
