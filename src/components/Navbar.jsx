import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <div className="container-fluid">
        {/* Logo */}
        <Link className="navbar-brand fw-bold" to="/">
          🛠️ ServiApp
        </Link>

        {/* Botón responsive */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/services">
                Servicios
              </NavLink>
            </li>

            {user && (
              <li className="nav-item">
                <NavLink className="nav-link" to="/dashboard">
                  Dashboard
                </NavLink>
              </li>
            )}
          </ul>

          {/* Auth buttons */}
          <div className="d-flex gap-2">
            {!user ? (
              <>
                <Link className="btn btn-outline-light btn-sm" to="/login">
                  Login
                </Link>
                <Link className="btn btn-warning btn-sm" to="/register">
                  Register
                </Link>
              </>
            ) : (
              <>
                <span className="text-light align-self-center me-2">
                  👤 Logeado
                </span>
                <button className="btn btn-danger btn-sm" onClick={logout}>
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
