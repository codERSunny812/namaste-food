import React, { useState, useEffect } from "react";
import Logo from "../Images/Namaste Food Logo.jpg";
import { Link, useNavigate } from "react-router-dom";

const Title = () => (
  <Link to="/">
    <img
      className="logo"
      src={Logo}
      alt="Namaste Food Logo"
      title="Namaste Food"
    />
  </Link>
);

const Header = () => {
  const token = localStorage.getItem("token");
  const [isLoggedin, setIsLoggedin] = useState(
    token?.length === 100 ? true : false
  );
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const navigate = useNavigate();

  useEffect(() => {
    const updateOnlineStatus = () => {
      setIsOnline(navigator.onLine);
    };

    window.addEventListener("online", updateOnlineStatus);
    window.addEventListener("offline", updateOnlineStatus);

    return () => {
      window.removeEventListener("online", updateOnlineStatus);
      window.removeEventListener("offline", updateOnlineStatus);
    };
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    setIsLoggedin(false);
    navigate("/login");
  };

  return (
    <div className="header">
      <Title />

      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>

          <li>
            <i className="fa-solid fa-cart-shopping"></i>
          </li>

          <li>
            {isLoggedin ? (
              <button className="logout-btn" onClick={handleLogout}>
                Logout
              </button>
            ) : (
              <Link to="/login">
                <button className="login-btn">Login</button>
              </Link>
            )}
          </li>
          <span
            style={{ marginLeft: "10px" }}
            className={`online-status ${isOnline ? "online" : "offline"}`}
          >
            {isOnline ? "Online" : "Offline"}
          </span>
        </ul>
      </div>
    </div>
  );
};

export default Header;
